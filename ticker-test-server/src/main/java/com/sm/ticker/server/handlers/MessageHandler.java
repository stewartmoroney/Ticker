package com.sm.ticker.server.handlers;

import org.springframework.web.socket.WebSocketSession;

public abstract class MessageHandler<T> {
    public abstract void handle(WebSocketSession session, T message);
}
