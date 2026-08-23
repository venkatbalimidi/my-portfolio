import { Component } from '@angular/core';

interface SkillGroup {
  number: string;
  title: string;
  description: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  readonly skillGroups: SkillGroup[] = [
    {
      number: '01',
      title: 'Backend Engineering',
      description:
        'Building maintainable enterprise applications and RESTful services using Java.',
      skills: [
        'Java',
        'Spring Boot',
        'Spring MVC',
        'Spring Data JPA',
        'Hibernate',
        'REST APIs',
        'Microservices',
        'JDBC'
      ]
    },
    {
      number: '02',
      title: 'Frontend Development',
      description:
        'Creating responsive and strongly typed web interfaces.',
      skills: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML',
        'SCSS'
      ]
    },
    {
      number: '03',
      title: 'Data and Integration',
      description:
        'Working with relational databases and application integrations.',
      skills: [
        'MySQL',
        'SQL Server',
        'PL/SQL',
        'JSON',
        'JPA'
      ]
    },
    {
      number: '04',
      title: 'Delivery and Support',
      description:
        'Supporting production systems and delivering reliable software changes.',
      skills: [
        'Git',
        'GitHub',
        'Maven',
        'Jenkins',
        'Gradle',
        'AWS',
        'Docker',
        'CI/CD',
        'GitHub Copilot',
        'GitHub Actions',
        'Log Analysis',
        'Incident Management'
      ]
    }
  ];
}