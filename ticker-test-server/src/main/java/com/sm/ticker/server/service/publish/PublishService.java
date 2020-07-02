package com.sm.ticker.server.service.publish;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sm.ticker.server.messages.PriceUpdate;
import com.sm.ticker.server.model.Price;
import com.sm.ticker.server.service.message.MessageService;
import com.sm.ticker.server.service.session.SessionService;
import com.sm.ticker.server.service.subscription.PriceSubscriptionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;

@Component
@Slf4j
public class PublishService {

    @Autowired
    private PriceSubscriptionService priceSubscriptionService;

    @Autowired
    private SessionService sessionService;

    @Autowired
    private MessageService messageService;

    private ObjectMapper mapper = new ObjectMapper();

    public void notifyPriceUpdate(Price price) {
        final PriceUpdate priceUpdate = new PriceUpdate(price);

        List<String> subscribedSessionIds = priceSubscriptionService.getSubscribedSessionIds(price.getInstrumentId());
        log.debug("update subscribed sessions " + subscribedSessionIds);
        sessionService.openSessions().stream()
            .filter(s -> subscribedSessionIds.contains(s.getId()))
            .forEach(ws -> {
                try {
                    messageService.send(ws, priceUpdate);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });
    }
}
