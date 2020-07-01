package com.sm.ticker.server.handlers;

import com.sm.ticker.server.messages.InstrumentPriceRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

@Component
public class InstrumentPriceRequestHandler extends MessageHandler<InstrumentPriceRequest>{

    @Override
    public void handle(WebSocketSession session, InstrumentPriceRequest message) {
        System.out.println(message.getInstrumentId());
    }
}
