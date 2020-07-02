package com.sm.ticker.server.handlers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sm.ticker.server.messages.InstrumentRequest;
import com.sm.ticker.server.messages.InstrumentResponse;
import com.sm.ticker.server.model.Instrument;
import com.sm.ticker.server.service.instrument.InstrumentService;
import com.sm.ticker.server.service.message.MessageService;
import com.sm.ticker.server.service.session.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;

@Component
public class InstrumentRequestHandler extends MessageHandler<InstrumentRequest>{

    @Autowired
    private SessionService sessionService;

    @Autowired
    private MessageService messageService;

    @Autowired
    private InstrumentService instrumentService;

    private ObjectMapper mapper = new ObjectMapper();

    @Override
    public void handle(WebSocketSession session, InstrumentRequest message) {
        sendInstruments(session, instrumentService.getInstruments());
    }

    private void sendInstruments(WebSocketSession session, Instrument[] instruments) {
        try {
            InstrumentResponse resp = new InstrumentResponse(instruments);
            var strValue = mapper.writeValueAsString(resp);
            messageService.send(session, strValue);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
