package com.sm.ticker.server.websocket;

import com.sm.ticker.server.json.JsonMessageParser;
import com.sm.ticker.server.service.session.SessionService;
import com.sm.ticker.server.service.subscription.PriceSubscriptionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;

public class SocketHandlerTest {

    @Mock
    private SessionService sessionService;

    @Mock
    private PriceSubscriptionService priceSubscriptionService;

    @Mock
    private JsonMessageParser messageParser;

    @InjectMocks
    private SocketHandler socketHandler;

    @BeforeEach
    public void setup(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void shouldHandleOpenSession(){
        WebSocketSession session = Mockito.mock(WebSocketSession.class);
        socketHandler.afterConnectionEstablished(session);
        Mockito.verify(sessionService).sessionOpen(session);
        Mockito.verifyNoMoreInteractions(sessionService);
    }

    @Test
    public void shouldHandleCloseSession() {
        WebSocketSession session = Mockito.mock(WebSocketSession.class);
        socketHandler.afterConnectionClosed(session, CloseStatus.NORMAL);
        Mockito.verify(sessionService).sessionClose(session);
        Mockito.verifyNoMoreInteractions(sessionService);
    }

    @Test
    public void shouldHandleTextMessage() throws IOException {
        WebSocketSession session = Mockito.mock(WebSocketSession.class);
        String msgText = "someText";
        socketHandler.handleTextMessage(session, new TextMessage(msgText));
        Mockito.verify(messageParser).parse(session, msgText);
        Mockito.verifyNoMoreInteractions(sessionService);
    }

}
