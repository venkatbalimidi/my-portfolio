package com.venkat.portfolio_backend.project;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProjectDataInitializer implements CommandLineRunner {

    private final ProjectRepository projectRepository;

    public ProjectDataInitializer(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public void run(String... args) {
        if (projectRepository.count() > 0) {
            return;
        }

        Project portfolio = new Project(
                "Developer Portfolio",
                "A cinematic full-stack developer portfolio built to showcase professional experience, technical skills and software projects.",
                "In Development",
                List.of(
                        "Java 25",
                        "Spring Boot 4",
                        "Angular 22",
                        "TypeScript",
                        "REST APIs"
                ),
                null,
                null
        );

        Project serviceDesk = new Project(
                "IT Service Desk",
                "An enterprise service-management application for managing users, incidents, service requests and support workflows.",
                "In Development",
                List.of(
                        "Java",
                        "Spring Boot",
                        "Spring Cloud",
                        "Microservices",
                        "MySQL",
                        "JWT"
                ),
                null,
                null
        );

        projectRepository.saveAll(List.of(portfolio, serviceDesk));
    }
}
