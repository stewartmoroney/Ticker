package com.sm.ticker.server.handlers;

import com.sm.ticker.server.messages.SubscribePriceRequest;
import com.sm.ticker.server.messages.SubscribePriceResponse;
import com.sm.ticker.server.service.message.MessageService;
import com.sm.ticker.server.service.subscription.PriceSubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;

@Component
public class SubscribePriceRequestHandler extends MessageHandler<SubscribePriceRequest>{

    @Autowired
    PriceSubscriptionService priceSubscriptionService;

    @Autowired
    private MessageService messageService;

    @Override
    public void handle(WebSocketSession session, SubscribePriceRequest message) {
        priceSubscriptionService.subscribe(session.getId(), message.getInstrumentId());
        try {
            messageService.send(session, new SubscribePriceResponse(message.getCorrelationId()));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
