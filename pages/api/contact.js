import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Validate the input data
  if (!name || !email || !message) {
    return res.status(422).json({ message: 'Incomplete data' });
  }

  // Create a nodemailer transporter using your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'sjp.ai.work@gmail.com',
      pass: 'd00P^Qh2J0cV',
    },
  });

  try {
    // Send the email using nodemailer
    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'sjpercle929@gmail.com',
      subject: 'Message from your website',
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error });
  }
}
