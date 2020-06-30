package com.sm.ticker.server.service.message;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;

@Component
public class MessageService {
    public void send(WebSocketSession session, String message) throws IOException {
        session.sendMessage(new TextMessage(message));
    }
}
