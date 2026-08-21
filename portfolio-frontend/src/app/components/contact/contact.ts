import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { ContactApi } from '../../services/contact-api';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  private readonly formBuilder = inject(FormBuilder);
  private readonly contactApi = inject(ContactApi);

  readonly submitting = signal(false);
  readonly successMessage = signal('');
  readonly errorMessage = signal('');

  readonly contactForm = this.formBuilder.nonNullable.group({
    name: [
      '',
      [
        Validators.required,
        Validators.maxLength(100)
      ]
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.maxLength(255)
      ]
    ],
    subject: [
      '',
      [
        Validators.required,
        Validators.maxLength(200)
      ]
    ],
    message: [
      '',
      [
        Validators.required,
        Validators.maxLength(2000)
      ]
    ]
  });

  submitForm(): void {
    this.successMessage.set('');
    this.errorMessage.set('');

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);

    this.contactApi.sendMessage(
      this.contactForm.getRawValue()
    ).subscribe({
      next: response => {
        this.successMessage.set(response.message);
        this.contactForm.reset();
        this.submitting.set(false);
      },
      error: error => {
        console.error('Contact message failed:', error);
        this.errorMessage.set(
          'Your message could not be sent. Please try again.'
        );
        this.submitting.set(false);
      }
    });
  }
}