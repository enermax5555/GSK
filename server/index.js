import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.TO_EMAIL,
      subject: 'New Contact Form Submission',
      text: message,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b><br/>${message}</p>`,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));