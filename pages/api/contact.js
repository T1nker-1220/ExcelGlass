import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Verify the connection configuration
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: `"${name} via Excel Glass Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL_RECIPIENT,
      replyTo: email,
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message}</p>
        <hr>
        <p><small>This email was sent via Excel Glass website contact form. To reply directly to the customer, simply reply to this email.</small></p>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Failed to send email', 
      error: error.message,
      details: error.response || 'No additional details available'
    });
  }
}
