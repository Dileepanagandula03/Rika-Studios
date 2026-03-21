import express from "express";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

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

  app.use(cors());
  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      const resend = getResend();
      const submissionId = Math.random().toString(36).substring(7).toUpperCase();
      console.log(`Attempting to send email to: ${process.env.RECEIVING_EMAIL || "rikagayarstudio@gmail.com"}`);
      
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
        console.error("Resend API Error:", error);
        return res.status(400).json({ error });
      }

      console.log("Resend Success Response:", data);
      res.status(200).json({ message: "Email sent successfully!", data });
    } catch (err) {
      console.error("Server Error:", err);
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
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
