package com.sm.ticker.server.tick;

import com.sm.ticker.server.messages.UserSession;
import com.sm.ticker.server.model.Tick;
import com.sm.ticker.server.stomp.SessionController;
import com.sm.ticker.server.stomp.StompSender;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import java.time.Instant;
import java.util.UUID;

@Slf4j
@Controller
@AllArgsConstructor
public class TickController {

    private final SessionController sessionController;
    private final StompSender stompSender;
    private final TickFeed feed;

    @MessageMapping("/tick/subscribe")
    public void subscribe(SimpMessageHeaderAccessor stompAccessor) {
        log.info("Received request from {}", sessionController.getUserSession(stompAccessor));

        UserSession userSession = sessionController.getUserSession(stompAccessor);
        StompSender.Sender sender = stompSender.createSender(userSession, "");

        feed.subscribe(userSession, tick -> sender.sendData("/tick", tick, tick.getTimeStamp()))
                .whenComplete((ack, error) -> sender.send("/tick/subscribe/ack", ack, error, Instant.now()));
    }

    @MessageMapping("/tick/unsubscribe")
    public void unsubscribe(SimpMessageHeaderAccessor stompAccessor) {
        log.info("Received request from {}", sessionController.getUserSession(stompAccessor));
        UserSession userSession = sessionController.getUserSession(stompAccessor);
        feed.unsubscribe(userSession);
    }

    @Scheduled(fixedRate = 1000L)
    void sendRequest() {
        feed.handleDataUpdate(new Tick(UUID.randomUUID().toString(), Instant.now()));
    }
}
