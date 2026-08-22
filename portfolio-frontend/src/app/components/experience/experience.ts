import { Component } from '@angular/core';

interface WorkExperience {
  company: string;
  companyUrl: string;
  logoUrl?: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  featured: boolean;
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  readonly experiences: WorkExperience[] = [
    {
      company: 'IFS',
      companyUrl: 'https://www.ifs.com/',
      logoUrl: '/images/companies/ifs-logo.png',
      role: 'Application Support Analyst',
      location: 'United Kingdom',
      period: 'August 2022 — August 2026',
      description:
        'Provided L3 production support and collaborated with development teams to improve the reliability of enterprise Java applications.',
      achievements: [
        'Investigated complex incidents using application logs, SQL queries and root-cause analysis.',
        'Delivered targeted Java fixes, regression testing and production release support.',
        'Worked across incident, problem and change-management processes.',
        'Received client appreciation for resolving critical production incidents.'
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'REST APIs',
        'Microservices',
        'SQL',
        'JPA / Hibernate',
        'Maven',
        'Jenkins',
        'Git',
        'GitHub, GitHub Copilot',
        'AWS', 'Docker', 'understanding of Kubernetes' 
      ],
      featured: true
    },
    {
      company: 'TCS',
      companyUrl: 'https://www.tcs.com/',
      logoUrl: '/images/companies/tcs-logo.svg',
      role: 'Software Developer',
      location: 'India',
      period: 'January 2019 — December 2020',
      description:
        'Developed and supported enterprise Java components and financial-data workflows with a focus on reliability and maintainable delivery.',
      achievements: [
        'Developed Java and Spring backend components for enterprise applications.',
        'Built and supported RESTful services and SQL-based data workflows.',
        'Investigated defects and implemented production fixes.',
        'Contributed through Git-based development and CI/CD processes.'
      ],
      technologies: [
        'Java',
        'Spring',
        'Struts',
        'REST',
        'SQL Server',
        'PL/SQL',
        'Jenkins',
        'Gradle'
      ],
      featured: false
    }
  ];
}