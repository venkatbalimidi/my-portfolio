import { Component, signal } from '@angular/core';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { CvRequest } from './components/cv-request/cv-request';

@Component({
  selector: 'app-root',
  imports: [ Experience, Projects, Skills, CvRequest, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-frontend');
}
