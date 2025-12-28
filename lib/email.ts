import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  email: string
  phone: string
  eventType: 'wedding' | 'corporate' | 'birthday' | 'social' | 'other'
  eventDate: string
  guests: string
  message: string
}

// Helper to format event type for display
function formatEventType(eventType: string): string {
  const formatted = {
    wedding: 'Wedding',
    corporate: 'Corporate Event',
    birthday: 'Birthday Celebration',
    social: 'Social Gathering',
    other: 'Other Event'
  }
  return formatted[eventType as keyof typeof formatted] || eventType
}

export async function sendNotificationEmail(formData: ContactFormData) {
  try {
    const data = await resend.emails.send({
      from: 'Tiara Events <notifications@tiaaraevents.com>',
      to: [process.env.ADMIN_EMAIL!],
      subject: `🎉 New Event Inquiry: ${formatEventType(formData.eventType)}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ec4899, #db2777); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb; }
            .detail { margin-bottom: 15px; }
            .label { font-weight: bold; color: #6b7280; }
            .value { color: #111827; }
            .message-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #ec4899; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎊 New Event Inquiry!</h1>
              <p>A potential client has submitted an inquiry through your website</p>
            </div>
            <div class="content">
              <div class="detail">
                <span class="label">Client Name:</span>
                <span class="value"> ${formData.name}</span>
              </div>
              <div class="detail">
                <span class="label">Email:</span>
                <span class="value"> ${formData.email}</span>
              </div>
              <div class="detail">
                <span class="label">Phone:</span>
                <span class="value"> ${formData.phone}</span>
              </div>
              <div class="detail">
                <span class="label">Event Type:</span>
                <span class="value"> ${formatEventType(formData.eventType)}</span>
              </div>
              <div class="detail">
                <span class="label">Event Date:</span>
                <span class="value"> ${new Date(formData.eventDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div class="detail">
                <span class="label">Number of Guests:</span>
                <span class="value"> ${formData.guests}</span>
              </div>
              
              <div class="message-box">
                <div class="label">Client's Message:</div>
                <p>${formData.message}</p>
              </div>
              
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
              
              <div style="text-align: center; color: #6b7280; font-size: 14px;">
                <p>Received on: ${new Date().toLocaleString('en-US', { 
                  dateStyle: 'full', 
                  timeStyle: 'medium' 
                })}</p>
                <p><a href="mailto:${formData.email}" style="color: #ec4899;">Reply to ${formData.name}</a></p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return { success: true, data }
  } catch (error) {
    console.error('Failed to send notification email:', error)
    return { success: false, error }
  }
}

export async function sendConfirmationEmail(clientEmail: string, clientName: string) {
  try {
    await resend.emails.send({
      from: 'Tiara Events <hello@tiaaraevents.com>',
      to: [clientEmail],
      subject: 'Thank you for your inquiry!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .content { background: #f9fafb; padding: 30px; border-radius: 10px; border: 1px solid #e5e7eb; }
            .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2 style="color: #ec4899;">✨ Thank You for Reaching Out! ✨</h2>
          </div>
          
          <div class="content">
            <p>Hi <strong>${clientName}</strong>,</p>
            
            <p>Thank you for your interest in Tiara Events Management! We're thrilled that you're considering us to help bring your event vision to life.</p>
            
            <p><strong>What happens next:</strong></p>
            <ul>
              <li>We'll review your inquiry within 24 hours</li>
              <li>You'll receive a personalized response from our team</li>
              <li>We'll schedule a complimentary consultation to discuss your event in detail</li>
            </ul>
            
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Browse our portfolio on our website</li>
              <li>Follow us on social media for event inspiration</li>
              <li>Check out our blog for event planning tips</li>
            </ul>
            
            <div class="signature">
              <p>Warm regards,</p>
              <p><strong style="color: #ec4899;">Tiara Johnson</strong><br>
              Founder & Lead Event Planner<br>
              Tiara Events Management</p>
              <p style="font-size: 14px; color: #6b7280;">
                📞 (555) 123-4567<br>
                📍 123 Event Street, New York, NY 10001<br>
                🌐 www.tiaaraevents.com
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
  } catch (error) {
    console.error('Failed to send confirmation email:', error)
  }
}