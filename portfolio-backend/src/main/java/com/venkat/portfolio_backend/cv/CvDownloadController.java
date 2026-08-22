package com.venkat.portfolio_backend.cv;

import jakarta.validation.Valid;
import org.springframework.core.io.Resource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cv")
//@CrossOrigin(
  //      origins = "http://localhost:4200",
    //    exposedHeaders = HttpHeaders.CONTENT_DISPOSITION
//)
public class CvDownloadController {

    private final CvDownloadService cvDownloadService;

    public CvDownloadController(
            CvDownloadService cvDownloadService
    ) {
        this.cvDownloadService = cvDownloadService;
    }

    @PostMapping(
            value = "/download",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_PDF_VALUE
    )
    public ResponseEntity<Resource> downloadCv(
            @Valid @RequestBody CvDownloadForm form
    ) {
        Resource cv = cvDownloadService.requestAndDownload(form);

        ContentDisposition disposition =
                ContentDisposition.attachment()
                        .filename("Venkat_Balimidi_CV.pdf")
                        .build();

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_PDF)
                .header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        disposition.toString()
                )
                .body(cv);
    }
}