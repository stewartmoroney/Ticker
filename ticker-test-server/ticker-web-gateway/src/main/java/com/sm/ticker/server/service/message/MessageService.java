package com.sm.ticker.server.service.message;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;

@Component
public class MessageService {

    private ObjectMapper mapper = new ObjectMapper();

    public void send(WebSocketSession session, Object payload) throws IOException {
        String message = mapper.writeValueAsString(payload);
        session.sendMessage(new TextMessage(message));
    }
}
