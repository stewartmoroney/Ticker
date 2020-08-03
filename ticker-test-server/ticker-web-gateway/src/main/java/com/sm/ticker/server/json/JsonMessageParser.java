package com.sm.ticker.server.json;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.sm.ticker.server.handlers.SubscribePriceRequestHandler;
import com.sm.ticker.server.handlers.InstrumentRequestHandler;
import com.sm.ticker.server.handlers.UnsubscribePriceRequestHandler;
import com.sm.ticker.server.messages.SubscribePriceRequest;
import com.sm.ticker.server.messages.InstrumentRequest;
import com.sm.ticker.server.messages.UnsubscribePriceRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;

@Component
@Slf4j
public class JsonMessageParser {

    @Autowired
    private InstrumentRequestHandler instrumentRequestHandler;

    @Autowired
    private SubscribePriceRequestHandler instrumentPriceRequestHandler;

    @Autowired
    private UnsubscribePriceRequestHandler unsubscribePriceRequestHandler;


    private ObjectMapper mapper = new ObjectMapper();
    public void parse(WebSocketSession session, String payload) throws IOException {
        if(payload.startsWith("CONNECT")) {
            return;
        }
        JsonNode node = mapper.readValue(payload, JsonNode.class);
        var msgType = node.get("type").asText();
        var bodyNode = node.get("body");

        switch(msgType) {
            case "InstrumentRequest" -> {
                var request = mapper.treeToValue(bodyNode, InstrumentRequest.class);
                instrumentRequestHandler.handle(session, request);
            }
            case "SubscribePriceRequest" -> {
                var request = mapper.treeToValue(bodyNode, SubscribePriceRequest.class);
                instrumentPriceRequestHandler.handle(session, request);
            }
            case "UnsubscribePriceRequest" -> {
                var request = mapper.treeToValue(bodyNode, UnsubscribePriceRequest.class);
                unsubscribePriceRequestHandler.handle(session, request);
            }
            default -> {
                log.error("unknown msg type " + msgType + "" + payload);
            }
        }
    }
}
