import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CvDownloadApi } from '../../services/cv-download-api';

@Component({
  selector: 'app-cv-request',
  imports: [ReactiveFormsModule],
  templateUrl: './cv-request.html',
  styleUrl: './cv-request.scss'
})
export class CvRequest {
  private readonly formBuilder = inject(FormBuilder);
  private readonly cvDownloadApi = inject(CvDownloadApi);

  readonly downloading = signal(false);
  readonly successMessage = signal('');
  readonly errorMessage = signal('');

  readonly cvForm = this.formBuilder.nonNullable.group({
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
    company: [
      '',
      Validators.maxLength(150)
    ],
    reason: [
      '',
      Validators.maxLength(500)
    ],
    consentGiven: [
      false,
      Validators.requiredTrue
    ]
  });

  submitForm(): void {
    this.successMessage.set('');
    this.errorMessage.set('');

    if (this.cvForm.invalid) {
      this.cvForm.markAllAsTouched();
      return;
    }

    this.downloading.set(true);

    this.cvDownloadApi
      .downloadCv(this.cvForm.getRawValue())
      .subscribe({
        next: pdf => {
          this.downloadPdf(pdf);

          this.successMessage.set(
            'Thank you. Your CV download has started.'
          );

          this.cvForm.reset();
          this.downloading.set(false);
        },
        error: error => {
          console.error('CV download failed:', error);

          this.errorMessage.set(
            'The CV could not be downloaded. Please try again.'
          );

          this.downloading.set(false);
        }
      });
  }

  private downloadPdf(pdf: Blob): void {
    const fileUrl = URL.createObjectURL(pdf);
    const downloadLink = document.createElement('a');

    downloadLink.href = fileUrl;
    downloadLink.download = 'Venkat_Balimidi_CV.pdf';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();

    URL.revokeObjectURL(fileUrl);
  }
}