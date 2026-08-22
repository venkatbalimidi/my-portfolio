package com.venkat.portfolio_backend.cv;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin/cv-requests")
public class CvAdminController {

    private final CvDownloadService cvDownloadService;

    public CvAdminController(
            CvDownloadService cvDownloadService
    ) {
        this.cvDownloadService = cvDownloadService;
    }

    @GetMapping
    public List<CvDownloadRequestResponse> getRequests() {
        return cvDownloadService.getDownloadRequests();
    }
}