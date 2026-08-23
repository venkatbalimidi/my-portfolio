import { inject, Service } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import {
  AdminCredentials,
  ContactMessageAdmin,
  CvDownloadRequest
} from '../models/admin';

@Service()
export class AdminApi {
  private readonly http = inject(HttpClient);

//   private readonly apiUrl =
//     'http://localhost:8080/api/admin';

private readonly apiUrl =
  `${environment.apiUrl}/admin`;

  getCvRequests(
    credentials: AdminCredentials
  ): Observable<CvDownloadRequest[]> {
    return this.http.get<CvDownloadRequest[]>(
      `${this.apiUrl}/cv-requests`,
      {
        headers: this.createHeaders(credentials)
      }
    );
  }

  getContactMessages(
    credentials: AdminCredentials
  ): Observable<ContactMessageAdmin[]> {
    return this.http.get<ContactMessageAdmin[]>(
      `${this.apiUrl}/contact-messages`,
      {
        headers: this.createHeaders(credentials)
      }
    );
  }

  private createHeaders(
    credentials: AdminCredentials
  ): HttpHeaders {
    const encodedCredentials = btoa(
      `${credentials.username}:${credentials.password}`
    );

    return new HttpHeaders({
      Authorization: `Basic ${encodedCredentials}`
    });
  }
}