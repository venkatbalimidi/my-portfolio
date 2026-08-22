package com.venkat.portfolio_backend.cv;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

import java.time.LocalDateTime;

@Entity
@Table(name = "cv_download_requests")
public class CvDownloadRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(length = 150)
    private String company;

    @Column(length = 500)
    private String reason;

    @Column(nullable = false)
    private boolean consentGiven;

    @Column(nullable = false, updatable = false)
    private LocalDateTime requestedAt;

    public CvDownloadRequest() {
    }

    public CvDownloadRequest(
            String name,
            String email,
            String company,
            String reason,
            boolean consentGiven
    ) {
        this.name = name;
        this.email = email;
        this.company = company;
        this.reason = reason;
        this.consentGiven = consentGiven;
    }

    @PrePersist
    public void setRequestedAt() {
        this.requestedAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public LocalDateTime getRequestedAt() {
        return requestedAt;
    }
}
