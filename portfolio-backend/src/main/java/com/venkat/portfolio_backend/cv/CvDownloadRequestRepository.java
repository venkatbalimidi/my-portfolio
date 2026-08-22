package com.venkat.portfolio_backend.cv;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CvDownloadRequestRepository
        extends JpaRepository<CvDownloadRequest, Long> {
	
    List<CvDownloadRequest> findAllByOrderByRequestedAtDesc();

}