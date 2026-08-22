package com.venkat.portfolio_backend.cv;

import java.nio.file.Path;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class CvDownloadService {

    private final CvDownloadRequestRepository repository;
    private final Path cvFilePath;

    public CvDownloadService(
            CvDownloadRequestRepository repository,
            @Value("${cv.file.path}") String cvFilePath
    ) {
        this.repository = repository;
        this.cvFilePath = Path.of(cvFilePath)
                .toAbsolutePath()
                .normalize();
    }

    public Resource requestAndDownload(CvDownloadForm form) {
        Resource cvResource =
                new FileSystemResource(cvFilePath);

        if (!cvResource.exists() || !cvResource.isReadable()) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "The CV is currently unavailable"
            );
        }

        CvDownloadRequest request = new CvDownloadRequest(
                form.name(),
                form.email(),
                form.company(),
                form.reason(),
                form.consentGiven()
        );

        repository.save(request);

        return cvResource;
    }
    
    public List<CvDownloadRequestResponse> getDownloadRequests() {
        return repository.findAllByOrderByRequestedAtDesc()
                .stream()
                .map(request -> new CvDownloadRequestResponse(
                        request.getId(),
                        request.getName(),
                        request.getEmail(),
                        request.getCompany(),
                        request.getReason(),
                        request.isConsentGiven(),
                        request.getRequestedAt()
                ))
                .toList();
    }
}