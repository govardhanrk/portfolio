import { z } from "zod";
import { sendEmail } from "../lib/sendgrid.js";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export async function handleContactForm(data: ContactFormData) {
  try {
    // Validate the input data
    const validatedData = contactSchema.parse(data);

    // Send email using SendGrid
    await sendEmail({
      name: validatedData.name,
      email: validatedData.email,
      subject: validatedData.subject,
      message: validatedData.message
    });

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    throw error;
  }
} 