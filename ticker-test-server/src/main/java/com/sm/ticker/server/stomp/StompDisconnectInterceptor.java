package com.sm.ticker.server.stomp;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationListener;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Slf4j
@RequiredArgsConstructor
@Component
public class StompDisconnectInterceptor implements ApplicationListener<SessionDisconnectEvent> {

    private final SessionController sessionController;

    public void onApplicationEvent(SessionDisconnectEvent event) {
        StompHeaderAccessor stompAccessor = StompHeaderAccessor.wrap(event.getMessage());
        log.info("Session disconnect event with sessionId {}", stompAccessor.getSessionId());

        sessionController.onStompDisconnected(stompAccessor);
    }
}
