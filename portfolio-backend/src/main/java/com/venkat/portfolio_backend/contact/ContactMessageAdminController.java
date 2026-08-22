package com.venkat.portfolio_backend.contact;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin/contact-messages")
public class ContactMessageAdminController {

    private final ContactMessageService contactMessageService;

    public ContactMessageAdminController(
            ContactMessageService contactMessageService
    ) {
        this.contactMessageService = contactMessageService;
    }

    @GetMapping
    public List<ContactMessageAdminResponse> getMessages() {
        return contactMessageService.getMessages();
    }
}