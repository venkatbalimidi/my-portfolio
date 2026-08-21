package com.venkat.portfolio_backend.project;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

import java.util.List;

public record ProjectRequest(

        @NotBlank(message = "Title is required")
        String title,

        @NotBlank(message = "Summary is required")
        @Size(max = 1000, message = "Summary must not exceed 1000 characters")
        String summary,

        @NotBlank(message = "Status is required")
        String status,

        @NotEmpty(message = "At least one technology is required")
        List<String> technologies,

        String sourceCodeUrl,

        String liveUrl
) {
}