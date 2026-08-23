import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Project } from '../models/project';
import { environment } from '../../environments/environment';

@Service()
export class ProjectApi {
  private readonly http = inject(HttpClient);

  // private readonly apiUrl = 'http://localhost:8080/api/projects';

  private readonly apiUrl =
  `${environment.apiUrl}/projects`;

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
}