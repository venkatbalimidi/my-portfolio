import { DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { forkJoin } from 'rxjs';

import {
  ContactMessageAdmin,
  CvDownloadRequest
} from '../../models/admin';
import { AdminApi } from '../../services/admin-api';

@Component({
  selector: 'app-admin',
  imports: [
    ReactiveFormsModule,
    DatePipe
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin {
  private readonly formBuilder = inject(FormBuilder);
  private readonly adminApi = inject(AdminApi);

  readonly loading = signal(false);
  readonly loggedIn = signal(false);
  readonly errorMessage = signal('');

  readonly cvRequests = signal<CvDownloadRequest[]>([]);
  readonly contactMessages = signal<ContactMessageAdmin[]>([]);

  readonly loginForm = this.formBuilder.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  login(): void {
    this.errorMessage.set('');

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);

    const credentials = this.loginForm.getRawValue();

    forkJoin({
      cvRequests: this.adminApi.getCvRequests(credentials),
      contactMessages:
        this.adminApi.getContactMessages(credentials)
    }).subscribe({
      next: response => {
        this.cvRequests.set(response.cvRequests);
        this.contactMessages.set(response.contactMessages);
        this.loggedIn.set(true);
        this.loading.set(false);

        this.loginForm.controls.password.setValue('');
      },
      error: error => {
        console.error('Admin login failed:', error);

        this.errorMessage.set(
          error.status === 401
            ? 'The username or password is incorrect.'
            : 'The admin data could not be loaded.'
        );

        this.loading.set(false);
      }
    });
  }

  logout(): void {
    this.loggedIn.set(false);
    this.cvRequests.set([]);
    this.contactMessages.set([]);
    this.loginForm.reset();
  }
}