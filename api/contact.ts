import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { randomUUID } from 'crypto';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { name, email, phone, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  if (message.length > 5000) {
    return res.status(400).json({ error: 'Message is too long.' });
  }

  const key = process.env.RESEND_CONTACT_KEY;
  if (!key) {
    return res.status(500).json({ error: 'Server misconfiguration.' });
  }

  const resend = new Resend(key);
  const submissionId = randomUUID().substring(0, 8).toUpperCase();

  const { data, error } = await resend.emails.send({
    from: 'Rika Studios <onboarding@resend.dev>',
    to: [process.env.RECEIVING_EMAIL || 'rikagayarstudios@gmail.com'],
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

  return res.status(200).json({ message: 'Email sent successfully!', data });
}
