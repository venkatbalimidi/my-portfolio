import { Component } from '@angular/core';

import { Contact } from '../../components/contact/contact';
import { CvRequest } from '../../components/cv-request/cv-request';
import { Experience } from '../../components/experience/experience';
import { Footer } from '../../components/footer/footer';
import { Projects } from '../../components/projects/projects';
import { Skills } from '../../components/skills/skills';

@Component({
  selector: 'app-home',
  imports: [
    Experience,
    Projects,
    Skills,
    CvRequest,
    Contact,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
}