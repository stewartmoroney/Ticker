package com.sm.ticker.server.handlers;

import com.sm.ticker.server.messages.UnsubscribePriceRequest;
import com.sm.ticker.server.service.subscription.PriceSubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

@Component
public class UnsubscribePriceRequestHandler extends MessageHandler<UnsubscribePriceRequest>{

    @Autowired
    PriceSubscriptionService priceSubscriptionService;

    @Override
    public void handle(WebSocketSession session, UnsubscribePriceRequest message) {
        priceSubscriptionService.unsubscribe(session.getId(), message.getInstrumentId());
    }
}
