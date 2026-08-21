package com.venkat.portfolio_backend.contact;

import java.time.LocalDateTime;

public record ContactMessageResponse(
        Long id,
        String message,
        LocalDateTime submittedAt
) {
}