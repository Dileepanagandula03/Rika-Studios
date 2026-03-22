import express from "express";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import path from "path";
import { randomUUID } from "crypto";

dotenv.config();

// Lazy initialization of Resend to prevent startup crashes if key is missing
let resendClient: Resend | null = null;
const getResend = () => {
  const key = process.env.RESEND_CONTACT_KEY;
  if (!key) {
    throw new Error("RESEND_CONTACT_KEY is missing. Please add it to your Secrets.");
  }
  if (!resendClient) {
    resendClient = new Resend(key);
  }
  return resendClient;
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use((_req, res, next) => {
    res.removeHeader('Content-Security-Policy');
    res.removeHeader('Content-Security-Policy-Report-Only');
    next();
  });
  app.use(cors({
    origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
  }));
  app.use(express.json({ limit: '10kb' }));

  // Health check
  app.get('/api/health', (_req, res) => res.status(200).json({ status: 'ok' }));

  // Rate limit: max 10 contact submissions per 15 minutes per IP
  const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { error: 'Too many requests. Please try again later.' },
  });

  // API Route for Contact Form
  app.post("/api/contact", contactLimiter, async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    // Message length limit
    if (message.length > 5000) {
      return res.status(400).json({ error: "Message is too long." });
    }

    try {
      const resend = getResend();
      const submissionId = randomUUID().substring(0, 8).toUpperCase();
      
      const { data, error } = await resend.emails.send({
        from: "Rika Studios <onboarding@resend.dev>",
        to: [process.env.RECEIVING_EMAIL || "rikagayarstudio@gmail.com"],
        replyTo: email,
        subject: `Contact Form Submission: Rika Studios`,
        text: `New Message from Rika Studios Contact Form\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}\n\n---\nReference ID: #${submissionId}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #111827; margin-top: 0;">New Inquiry from ${name}</h2>
            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
            </div>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; color: #374151; background: #fff; padding: 15px; border: 1px solid #eee; border-radius: 8px;">${message}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="color: #9CA3AF; font-size: 11px; text-align: center;">Reference ID: #${submissionId} | Rika Studios Contact System</p>
          </div>
        `,
      });

      if (error) {
        return res.status(400).json({ error });
      }

      res.status(200).json({ message: "Email sent successfully!", data });
    } catch (err) {
      res.status(500).json({ error: "Internal server error." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`Server running on http://localhost:${PORT}`);
    }
  });
}

startServer();
