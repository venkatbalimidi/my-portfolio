package com.venkat.portfolio_backend.cv;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CvDownloadForm(

        @NotBlank(message = "Name is required")
        @Size(max = 100, message = "Name must not exceed 100 characters")
        String name,

        @NotBlank(message = "Email is required")
        @Email(message = "Please enter a valid email address")
        @Size(max = 255, message = "Email must not exceed 255 characters")
        String email,

        @Size(max = 150, message = "Company must not exceed 150 characters")
        String company,

        @Size(max = 500, message = "Reason must not exceed 500 characters")
        String reason,

        @AssertTrue(
                message = "You must consent before downloading the CV"
        )
        boolean consentGiven
) {
}