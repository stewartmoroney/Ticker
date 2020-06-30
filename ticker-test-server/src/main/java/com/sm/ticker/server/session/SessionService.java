package com.sm.ticker.server.session;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Component
public class SessionService {
    private Map<String, WebSocketSession> sessionsMap = new HashMap<String, WebSocketSession>();

    public void sessionOpen(WebSocketSession session)  {
        sessionsMap.put(session.getId(), session);
    }

    public void sessionClose(WebSocketSession session) {
        sessionsMap.remove(session.getId());
    }

    public Collection<WebSocketSession> openSessions() {
        return sessionsMap.values();
    }
}
