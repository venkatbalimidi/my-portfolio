package com.venkat.portfolio_backend.project;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<ProjectResponse> getProjects() {
        return projectRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public ProjectResponse createProject(ProjectRequest request) {
        Project project = new Project(
                request.title(),
                request.summary(),
                request.status(),
                request.technologies(),
                request.sourceCodeUrl(),
                request.liveUrl()
        );

        Project savedProject = projectRepository.save(project);

        return toResponse(savedProject);
    }
    
    
    public ProjectResponse getProjectById(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ProjectNotFoundException(id));

        return toResponse(project);
    }
    
    public ProjectResponse updateProject(Long id, ProjectRequest request) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ProjectNotFoundException(id));

        project.setTitle(request.title());
        project.setSummary(request.summary());
        project.setStatus(request.status());
        project.setTechnologies(request.technologies());
        project.setSourceCodeUrl(request.sourceCodeUrl());
        project.setLiveUrl(request.liveUrl());

        Project updatedProject = projectRepository.save(project);

        return toResponse(updatedProject);
    }
    
    private ProjectResponse toResponse(Project project) {
        return new ProjectResponse(
                project.getId(),
                project.getTitle(),
                project.getSummary(),
                project.getStatus(),
                project.getTechnologies(),
                project.getSourceCodeUrl(),
                project.getLiveUrl()
        );
    }
    
    public void deleteProject(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ProjectNotFoundException(id));

        projectRepository.delete(project);
    }
    
    
    
}