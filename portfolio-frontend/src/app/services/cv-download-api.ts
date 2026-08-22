import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CvDownloadForm } from '../models/cv-download';

@Service()
export class CvDownloadApi {
  private readonly http = inject(HttpClient);

  private readonly apiUrl =
    'http://localhost:8080/api/cv/download';

  downloadCv(request: CvDownloadForm): Observable<Blob> {
    return this.http.post(
      this.apiUrl,
      request,
      {
        responseType: 'blob'
      }
    );
  }
}