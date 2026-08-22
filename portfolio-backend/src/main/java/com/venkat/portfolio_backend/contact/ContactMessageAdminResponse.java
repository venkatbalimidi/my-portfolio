package com.venkat.portfolio_backend.contact;

import java.time.LocalDateTime;

public record ContactMessageAdminResponse(
        Long id,
        String name,
        String email,
        String subject,
        String message,
        LocalDateTime createdAt
) {
}