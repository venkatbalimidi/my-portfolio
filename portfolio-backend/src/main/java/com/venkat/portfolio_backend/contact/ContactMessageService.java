package com.venkat.portfolio_backend.contact;

import org.springframework.stereotype.Service;

@Service
public class ContactMessageService {

    private final ContactMessageRepository contactMessageRepository;

    public ContactMessageService(
            ContactMessageRepository contactMessageRepository
    ) {
        this.contactMessageRepository = contactMessageRepository;
    }

    public ContactMessageResponse createMessage(
            ContactMessageRequest request
    ) {
        ContactMessage contactMessage = new ContactMessage(
                request.name(),
                request.email(),
                request.subject(),
                request.message()
        );

        ContactMessage savedMessage =
                contactMessageRepository.save(contactMessage);

        return new ContactMessageResponse(
                savedMessage.getId(),
                "Thank you. Your message has been received.",
                savedMessage.getCreatedAt()
        );
    }
}