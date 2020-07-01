package com.sm.ticker.server.handlers;

import com.sm.ticker.server.messages.SubscribePriceRequest;
import com.sm.ticker.server.service.subscription.PriceSubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

@Component
public class SubscribePriceRequestHandler extends MessageHandler<SubscribePriceRequest>{

    @Autowired
    PriceSubscriptionService priceSubscriptionService;

    @Override
    public void handle(WebSocketSession session, SubscribePriceRequest message) {
        priceSubscriptionService.subscribe(session.getId(), message.getInstrumentId());
    }
}
