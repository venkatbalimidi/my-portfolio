# Venkat Balimidi — Developer Portfolio

A full-stack developer portfolio showcasing my professional experience,
technical skills and software projects.

## Technology Stack

### Frontend

- Angular 22
- TypeScript
- SCSS
- Reactive Forms
- Angular HttpClient

### Backend

- Java 25
- Spring Boot 4
- Spring Web
- Spring Data JPA
- Bean Validation
- MySQL
- Maven

## Features

- Responsive single-page portfolio
- Professional experience and skills sections
- Projects loaded dynamically from a Spring Boot REST API
- Project CRUD operations
- Contact form with validation
- Contact messages stored in MySQL
- Downloadable CV
- Global API error handling
- Smooth scrolling and section animations

## Application Architecture

```text
Angular
   ↓ HTTP/JSON
Spring REST Controller
   ↓
Service
   ↓
Spring Data JPA Repository
   ↓
MySQL