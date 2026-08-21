package com.venkat.portfolio_backend.project;

import java.util.List;

public record ProjectResponse(
        Long id,
        String title,
        String summary,
        String status,
        List<String> technologies,
        String sourceCodeUrl,
        String liveUrl
) {
}