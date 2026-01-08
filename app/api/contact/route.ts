import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to Tiara (Notification)
    const notificationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #000; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #666; }
            .value { color: #333; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Inquiry Received</h1>
              <p>Pulse Strategy Group Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${formData.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${formData.email}</div>
              </div>
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${formData.company || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="label">Service Interest:</div>
                <div class="value">${formData.service || 'Not specified'}</div>
              </div>
              <div class="field">
                <div class="label">Project Details:</div>
                <div class="value">${formData.message}</div>
              </div>
              <div class="field">
                <div class="label">Timeline:</div>
                <div class="value">${formData.timeline || 'Not specified'}</div>
              </div>
              <div class="field">
                <div class="label">Budget Range:</div>
                <div class="value">${formData.budget || 'Not specified'}</div>
              </div>
              <div class="field">
                <div class="label">Submitted:</div>
                <div class="value">${new Date().toLocaleString('en-US', { 
                  timeZone: 'America/New_York',
                  dateStyle: 'full',
                  timeStyle: 'long'
                })}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Auto-response to client
    const autoResponseHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #000; color: white; padding: 30px; text-align: center; }
            .content { background: #ffffff; padding: 30px; }
            .greeting { font-size: 18px; margin-bottom: 20px; }
            .section { margin-bottom: 25px; }
            .section-title { color: #000; font-weight: bold; margin-bottom: 10px; }
            .highlight-box { background: #f5f5f5; padding: 15px; border-left: 4px solid #000; margin: 20px 0; }
            .signature { margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Contacting Pulse Strategy Group</h1>
            </div>
            <div class="content">
              <div class="greeting">
                <p>Dear ${formData.name},</p>
                <p>Thank you for reaching out to Pulse Strategy Group. We've received your inquiry and are excited to learn more about your vision.</p>
              </div>
              
              <div class="section">
                <div class="section-title">What Happens Next:</div>
                <div class="highlight-box">
                  <p><strong>1. Initial Review:</strong> Tiara will personally review your inquiry within 24-48 hours.</p>
                  <p><strong>2. Discovery Call:</strong> We'll schedule a 30-minute discovery call to discuss your goals in detail.</p>
                  <p><strong>3. Custom Proposal:</strong> Based on our conversation, we'll prepare a tailored proposal for your review.</p>
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">In the Meantime:</div>
                <p>• Explore our <a href="https://pulsestrategygroup.com/services" style="color: #000; text-decoration: underline;">Services</a> page for more details</p>
                <p>• Check out our <a href="https://pulsestrategygroup.com/about" style="color: #000; text-decoration: underline;">About</a> page to learn more about our approach</p>
              </div>
              
              <div class="signature">
                <p><strong>Best regards,</strong></p>
                <p><strong>Tiara Womack</strong><br>
                Founder & Principal Strategist<br>
                Pulse Strategy Group</p>
              </div>
            </div>
            
            <div class="footer">
              <p>Pulse Strategy Group | Strategy • Partnerships • Experiences</p>
              <p>Atlanta, GA | <a href="mailto:tiara@pulsestrategygroup.com" style="color: #666;">tiara@pulsestrategygroup.com</a></p>
              <p>© ${new Date().getFullYear()} Pulse Strategy Group. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send notification email to Tiara
    await transporter.sendMail({
      from: `"Pulse Strategy Group Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || 'tiara@pulsestrategygroup.com',
      subject: `New Inquiry: ${formData.name} - ${formData.service || 'General Inquiry'}`,
      html: notificationHtml,
      replyTo: formData.email,
    });

    // Send auto-response to client
    await transporter.sendMail({
      from: `"Tiara Womack" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: 'Thank You for Contacting Pulse Strategy Group',
      html: autoResponseHtml,
    });

    // Optional: You could also save to a database here
    // await saveToDatabase(formData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inquiry submitted successfully. You will receive a confirmation email shortly.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit inquiry. Please try again or contact us directly at tiara@pulsestrategygroup.com' 
      },
      { status: 500 }
    );
  }
}

// Optional: GET method for testing
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API is working. Use POST to submit inquiries.' },
    { status: 200 }
  );
}