import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmailService, ContactFormData } from '../../services/email.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss'
})
export class ContactSectionComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  get formControls() {
    return this.contactForm.controls;
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';
      this.submitSuccess = false;

      try {
        const formData: ContactFormData = {
          name: this.contactForm.value.name,
          email: this.contactForm.value.email,
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message
        };

        // Send email using Formspree
        const emailSent = await this.emailService.sendContactEmail(formData);
        
        if (emailSent) {
          this.submitSuccess = true;
          this.submitMessage = 'Your message has been sent successfully! I\'ll get back to you soon.';
          this.contactForm.reset();
        } else {
          throw new Error('Failed to send email');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        this.submitSuccess = false;
        this.submitMessage = 'Failed to send message. Please try again later or contact me directly at khadakkargovardhan@gmail.com';
      } finally {
        this.isSubmitting = false;
        // Clear message after 8 seconds
        setTimeout(() => {
          this.submitMessage = '';
        }, 8000);
      }
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }
}
