import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  ContactMessageRequest,
  ContactMessageResponse
} from '../models/contact-message';

@Service()
export class ContactApi {
  private readonly http = inject(HttpClient);

  private readonly apiUrl =
    'http://localhost:8080/api/contact-messages';

  sendMessage(
    request: ContactMessageRequest
  ): Observable<ContactMessageResponse> {
    return this.http.post<ContactMessageResponse>(
      this.apiUrl,
      request
    );
  }
}