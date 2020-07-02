package com.sm.ticker.server.service.message;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;

@Component
public class MessageService {

    private ObjectMapper mapper = new ObjectMapper();

    public void send(WebSocketSession session, Object payload) throws IOException {
        try {
            String strMessage = mapper.writeValueAsString(payload);
            send(session, strMessage);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }
}
