package com.venkat.portfolio_backend.cv;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CvDownloadRequestRepository
        extends JpaRepository<CvDownloadRequest, Long> {
}