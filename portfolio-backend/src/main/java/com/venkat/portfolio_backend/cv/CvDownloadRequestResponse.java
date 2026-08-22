package com.venkat.portfolio_backend.cv;

import java.time.LocalDateTime;

public record CvDownloadRequestResponse(
        Long id,
        String name,
        String email,
        String company,
        String reason,
        boolean consentGiven,
        LocalDateTime requestedAt
) {
}