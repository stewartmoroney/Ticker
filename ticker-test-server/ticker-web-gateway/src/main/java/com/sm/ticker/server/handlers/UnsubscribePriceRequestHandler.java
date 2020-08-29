package com.sm.ticker.server.handlers;

import com.sm.ticker.server.messages.UnsubscribePriceRequest;
import com.sm.ticker.server.messages.UnsubscribePriceResponse;
import com.sm.ticker.server.service.message.MessageService;
import com.sm.ticker.server.service.subscription.PriceSubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;

@Component
public class UnsubscribePriceRequestHandler extends MessageHandler<UnsubscribePriceRequest>{

    @Autowired
    PriceSubscriptionService priceSubscriptionService;

    @Autowired
    private MessageService messageService;

    @Override
    public void handle(WebSocketSession session, UnsubscribePriceRequest message) throws IOException {
        priceSubscriptionService.unsubscribe(session.getId(), message.getInstrumentId());
        messageService.send(session, new UnsubscribePriceResponse(message.getCorrelationId(), message.getInstrumentId()));
    }
}
