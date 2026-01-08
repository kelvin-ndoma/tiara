import nodemailer from 'nodemailer';

export async function sendEmailNotification(formData: any) {
  // Configure email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Email to Tiara
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'tiara@pulsestrategygroup.com', // Tiara's email
    subject: 'New Inquiry from Website',
    html: `
      <h2>New Inquiry Received</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Company:</strong> ${formData.company}</p>
      <p><strong>Service Interest:</strong> ${formData.service}</p>
      <p><strong>Project Details:</strong> ${formData.message}</p>
      <p><strong>Timeline:</strong> ${formData.timeline}</p>
      <p><strong>Budget:</strong> ${formData.budget || 'Not specified'}</p>
      <hr>
      <p>Received: ${new Date().toLocaleString()}</p>
    `,
  };

  // Auto-response to client
  const autoResponse = {
    from: process.env.EMAIL_USER,
    to: formData.email,
    subject: 'Thank you for contacting Pulse Strategy Group',
    html: `
      <h2>Thank You for Your Inquiry</h2>
      <p>Dear ${formData.name},</p>
      <p>We've received your inquiry and Tiara will get back to you within 24-48 hours.</p>
      <p><strong>What to expect:</strong></p>
      <ul>
        <li>Initial response within 48 hours</li>
        <li>Discovery call scheduling</li>
        <li>Preliminary strategy discussion</li>
      </ul>
      <p>Best regards,<br>The Pulse Strategy Group Team</p>
    `,
  };

  try {
    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoResponse);
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error };
  }
}