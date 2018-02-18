package com.sm.ticker.server.login;


import com.sm.ticker.server.messages.UserSession;
import com.sm.ticker.server.model.User;
import com.sm.ticker.server.stomp.Headers;
import com.sm.ticker.server.stomp.SessionController;
import com.sm.ticker.server.stomp.StompSender;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

import java.util.concurrent.CompletableFuture;

@Slf4j
@Controller
@AllArgsConstructor
public class LoginController {
    private final StompSender stompSender;
    private final SessionController sessionController;

    @MessageMapping("/login")
    public void login(SimpMessageHeaderAccessor stompAccessor) {
        log.info("Received request from {}", sessionController.getUserSession(stompAccessor));
        UserSession userSession = sessionController.getUserSession(stompAccessor);
        String correlationId = Headers.getCorrelationId(stompAccessor);
        String endpoint = "/login/ack";
        sendLoginAck(userSession, correlationId, endpoint, logonUser() , stompAccessor);
    }

    public void sendLoginAck(UserSession userSession, String correlationId, String endpoint, CompletableFuture<User> future, SimpMessageHeaderAccessor accessor) {
        StompSender.Sender sender = stompSender.createSender(userSession, correlationId);

        future.whenComplete((user, error) -> {
            if (error != null) {
                sender.sendError(endpoint, error);
            } else if (user == null || user.getId() == null) {
                // The stub implementation currently returns an empty json payload when the user is not found.
                sender.sendError(endpoint, "User not found");
            } else {
                sessionController.bindUserToSession(accessor, user);
                sender.sendData(endpoint, user);
            }
        });
    }

    private CompletableFuture<User> logonUser(){
        return CompletableFuture.completedFuture(User.builder().build());
    }
}
