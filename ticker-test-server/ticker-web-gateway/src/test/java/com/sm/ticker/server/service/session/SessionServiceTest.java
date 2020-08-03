package com.sm.ticker.server.service.session;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.web.socket.WebSocketSession;

public class SessionServiceTest {

    private SessionService sessionService = new SessionService();

    @Test
    public void shouldAddAndRemoveSessions() {
        WebSocketSession webSocketSession1 = Mockito.mock(WebSocketSession.class);
        Mockito.when(webSocketSession1.getId()).thenReturn("session1");
        sessionService.sessionOpen(webSocketSession1);
        Assertions.assertEquals(sessionService.openSessions().size(), 1);
        Assertions.assertEquals(sessionService.openSessions().toArray()[0], webSocketSession1);

        WebSocketSession webSocketSession2 = Mockito.mock(WebSocketSession.class);
        Mockito.when(webSocketSession2.getId()).thenReturn("session2");
        sessionService.sessionOpen(webSocketSession2);
        Assertions.assertEquals(sessionService.openSessions().size(), 2);
        Assertions.assertEquals(sessionService.openSessions().toArray()[0], webSocketSession2);
        Assertions.assertEquals(sessionService.openSessions().toArray()[1], webSocketSession1);

        sessionService.sessionClose(webSocketSession1);
        Assertions.assertEquals(sessionService.openSessions().size(), 1);
        Assertions.assertEquals(sessionService.openSessions().toArray()[0], webSocketSession2);

        sessionService.sessionClose(webSocketSession2);
        Assertions.assertEquals(sessionService.openSessions().size(), 0);
    }

    @Test
    public void shouldNotDuplicateSesions() {
        WebSocketSession webSocketSession1 = Mockito.mock(WebSocketSession.class);
        Mockito.when(webSocketSession1.getId()).thenReturn("session1");
        sessionService.sessionOpen(webSocketSession1);
        sessionService.sessionOpen(webSocketSession1);
        Assertions.assertEquals(sessionService.openSessions().size(), 1);
        Assertions.assertEquals(sessionService.openSessions().toArray()[0], webSocketSession1);
    }

    @Test
    public void shouldHandleClosingNonExistingSession() {
        WebSocketSession webSocketSession1 = Mockito.mock(WebSocketSession.class);
        Mockito.when(webSocketSession1.getId()).thenReturn("session1");
        sessionService.sessionClose(webSocketSession1);
        Assertions.assertEquals(sessionService.openSessions().size(), 0);
    }

}
