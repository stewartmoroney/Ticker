package com.sm.ticker.server.handlers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sm.ticker.server.messages.InstrumentRequest;
import com.sm.ticker.server.messages.InstrumentResponse;
import com.sm.ticker.server.model.Instrument;
import com.sm.ticker.server.service.message.MessageService;
import com.sm.ticker.server.session.SessionService;
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

    private ObjectMapper mapper = new ObjectMapper();
    private Instrument[] instruments = {
            new Instrument("1", "a"),
            new Instrument("2", "b"),
            new Instrument("3", "c")
    };

    @Override
    public void handle(WebSocketSession session, InstrumentRequest message) {
        sendInstruments(session, instruments);
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
