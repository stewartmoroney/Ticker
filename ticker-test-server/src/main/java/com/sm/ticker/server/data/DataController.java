package com.sm.ticker.server.data;

import com.sm.ticker.server.messages.UserSession;
import com.sm.ticker.server.model.Data;
import com.sm.ticker.server.model.Row;
import com.sm.ticker.server.stomp.SessionController;
import com.sm.ticker.server.stomp.StompSender;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import java.math.BigDecimal;
import java.math.MathContext;
import java.time.Instant;
import java.util.Collection;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Slf4j
@Configuration
@EnableScheduling
@Controller
@AllArgsConstructor
public class DataController {

    private final SessionController sessionController;
    private final StompSender stompSender;
    private final DataFeed feed;

    @MessageMapping("/data/subscribe")
    public void subscribe(SimpMessageHeaderAccessor stompAccessor) {
        log.info("Received request from {}", sessionController.getUserSession(stompAccessor));

        UserSession userSession = sessionController.getUserSession(stompAccessor);
        StompSender.Sender sender = stompSender.createSender(userSession, "");

        feed.subscribe(userSession, data -> sender.sendData("/data", data, Instant.now()))
                .whenComplete((ack, error) -> sender.send("/data/subscribe/ack", ack, error, Instant.now()));
    }

    @MessageMapping("/data/unsubscribe")
    public void unsubscribe(SimpMessageHeaderAccessor stompAccessor) {
        log.info("Received request from {}", sessionController.getUserSession(stompAccessor));
        UserSession userSession = sessionController.getUserSession(stompAccessor);
        feed.unsubscribe(userSession);
    }

    @Scheduled(fixedRate = 1000L)
    void sendRequest() {
        feed.handleDataUpdate(new Data(rows() , Instant.now() ));
    }

    private Collection<Row> rows() {
        return IntStream.range(1, 5).mapToObj(i -> new Row(String.valueOf(i), "name-" + i, new BigDecimal(Math.random()).round(new MathContext(2)))).collect(Collectors.toList());
    }
}
