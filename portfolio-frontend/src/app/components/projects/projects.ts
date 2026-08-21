import {
  Component,
  inject,
  OnInit,
  signal
} from '@angular/core';

import { Project } from '../../models/project';
import { ProjectApi } from '../../services/project-api';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {
  private readonly projectApi = inject(ProjectApi);

  readonly projects = signal<Project[]>([]);
  readonly loading = signal(true);
  readonly errorMessage = signal('');

  ngOnInit(): void {
    this.projectApi.getProjects().subscribe({
      next: (projects) => {
        this.projects.set(projects);
      },

      error: (error) => {
        console.error('Unable to load projects:', error);
        this.errorMessage.set('Projects could not be loaded.');
        this.loading.set(false);
      },

      complete: () => {
        this.loading.set(false);
      }
    });
  }
}