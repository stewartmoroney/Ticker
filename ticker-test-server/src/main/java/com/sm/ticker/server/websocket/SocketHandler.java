package com.sm.ticker.server.websocket;

import com.sm.ticker.server.json.JsonMessageParser;
import com.sm.ticker.server.service.session.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.AbstractWebSocketHandler;

import java.io.IOException;

@Component
public class SocketHandler  extends AbstractWebSocketHandler {

    @Autowired
    private SessionService sessionService;

    @Autowired
    private JsonMessageParser messageParser;

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        sessionService.sessionOpen(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        sessionService.sessionClose(session);
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException
    {
        messageParser.parse(session, message.getPayload());
    }
}
