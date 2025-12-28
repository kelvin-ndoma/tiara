import { NextRequest, NextResponse } from 'next/server'
import { sendNotificationEmail, sendConfirmationEmail } from '@/lib/email'
import { contactSchema, transformFormData } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Transform and validate the form data
    const transformedData = transformFormData(body)
    const validatedData = contactSchema.parse(transformedData)
    
    // Send notification to Tiara
    const notificationResult = await sendNotificationEmail(validatedData)
    
    if (!notificationResult.success) {
      console.error('Notification email failed:', notificationResult.error)
      return NextResponse.json(
        { 
          message: 'Failed to send notification. Please try again later.',
          success: false 
        },
        { status: 500 }
      )
    }
    
    // Send confirmation to client
    await sendConfirmationEmail(validatedData.email, validatedData.name)
    
    // Log the submission (for debugging)
    console.log('🎉 New inquiry received:', {
      name: validatedData.name,
      email: validatedData.email,
      eventType: validatedData.eventType,
      eventDate: validatedData.eventDate,
      timestamp: new Date().toISOString(),
    })
    
    return NextResponse.json(
      { 
        message: 'Your inquiry has been submitted successfully! We will contact you within 24 hours.',
        success: true 
      },
      { status: 200 }
    )
    
  } catch (error: any) {
    console.error('Contact form submission error:', error)
    
    // Handle validation errors
    if (error.errors) {
      return NextResponse.json(
        { 
          message: 'Please check your form data and try again.',
          errors: error.errors,
          success: false
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        message: 'An unexpected error occurred. Please try again later or contact us directly.',
        success: false 
      },
      { status: 500 }
    )
  }
}

// CORS headers for preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}