import { z } from 'zod'

// Event type enum with proper error handling
const eventTypeEnum = z.enum(['wedding', 'corporate', 'birthday', 'social', 'other'])

export const contactSchema = z.object({
  name: z.string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must be less than 100 characters' })
    .trim(),
  
  email: z.string()
    .email({ message: 'Please enter a valid email address' })
    .max(100, { message: 'Email must be less than 100 characters' })
    .toLowerCase()
    .trim(),
  
  phone: z.string()
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .max(20, { message: 'Phone number must be less than 20 digits' })
    .regex(/^[\d\s\-\+\(\)]+$/, { message: 'Please enter a valid phone number' })
    .trim(),
  
  eventType: eventTypeEnum,
  
  eventDate: z.string()
    .min(1, { message: 'Please select an event date' })
    .refine((date) => {
      const selectedDate = new Date(date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return selectedDate >= today
    }, { message: 'Event date must be in the future' }),
  
  guests: z.string()
    .min(1, { message: 'Please select number of guests' }),
  
  message: z.string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message must be less than 1000 characters' })
    .trim(),
})

// TypeScript type for the form data
export type ContactFormData = z.infer<typeof contactSchema>

// Helper function to transform form data
export function transformFormData(data: any): ContactFormData {
  return {
    ...data,
    name: data.name?.trim() || '',
    email: data.email?.toLowerCase().trim() || '',
    phone: data.phone?.trim() || '',
    message: data.message?.trim() || '',
  }
}