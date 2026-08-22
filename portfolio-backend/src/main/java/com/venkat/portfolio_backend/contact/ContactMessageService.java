package com.venkat.portfolio_backend.contact;

import java.util.List;

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
    
    public List<ContactMessageAdminResponse> getMessages() {
        return contactMessageRepository
                .findAllByOrderByCreatedAtDesc()
                .stream()
                .map(message -> new ContactMessageAdminResponse(
                        message.getId(),
                        message.getName(),
                        message.getEmail(),
                        message.getSubject(),
                        message.getMessage(),
                        message.getCreatedAt()
                ))
                .toList();
    }
}