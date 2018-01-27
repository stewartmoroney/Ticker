package com.sm.ticker.server.stomp;

import com.sm.ticker.server.model.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationListener;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.providers.ExpiringUsernameAuthenticationToken;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectEvent;

import java.security.Principal;

@Slf4j
@RequiredArgsConstructor
@Component
public class StompConnectInterceptor implements ApplicationListener<SessionConnectEvent> {

    private final SessionController sessionController;

    public void onApplicationEvent(SessionConnectEvent event) {
        StompHeaderAccessor stompAccessor = StompHeaderAccessor.wrap(event.getMessage());
        log.info("Session connect event with sessionId {}", stompAccessor.getSessionId());

        sessionController.onStompConnected(stompAccessor, getUser(stompAccessor.getUser()));
    }

    private User getUser(Principal principal) {
        if (principal instanceof ExpiringUsernameAuthenticationToken) {
            ExpiringUsernameAuthenticationToken userToken = (ExpiringUsernameAuthenticationToken) principal;
            return (User) userToken.getPrincipal();
        }
        else if(principal != null){
            return null;
        }
        return null;
    }
}
