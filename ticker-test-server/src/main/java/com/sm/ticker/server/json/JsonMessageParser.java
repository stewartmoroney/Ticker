package com.sm.ticker.server.json;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.sm.ticker.server.handlers.SubscribePriceRequestHandler;
import com.sm.ticker.server.handlers.InstrumentRequestHandler;
import com.sm.ticker.server.handlers.UnsubscribePriceRequestHandler;
import com.sm.ticker.server.messages.SubscribePriceRequest;
import com.sm.ticker.server.messages.InstrumentRequest;
import com.sm.ticker.server.messages.UnsubscribePriceRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

@Component
public class JsonMessageParser {

    @Autowired
    private InstrumentRequestHandler instrumentRequestHandler;

    @Autowired
    private SubscribePriceRequestHandler instrumentPriceRequestHandler;

    @Autowired
    private UnsubscribePriceRequestHandler unsubscribePriceRequestHandler;


    private ObjectMapper mapper = new ObjectMapper();
    public void parse(WebSocketSession session, String payload) throws JsonProcessingException {
        try{
            if(payload.startsWith("CONNECT")) {
                return;
            }
            JsonNode node = mapper.readValue(payload, JsonNode.class);
            var msgType = node.get("type").asText();
            var bodyNode = node.get("body");

            switch(msgType) {
                case "InstrumentRequest" -> {
                    InstrumentRequest instrumentRequest = mapper.treeToValue(bodyNode, InstrumentRequest.class);
                    instrumentRequestHandler.handle(session, instrumentRequest);
                }
                case "SubscribePriceRequest" -> {
                    SubscribePriceRequest subscribePriceRequest = mapper.treeToValue(bodyNode, SubscribePriceRequest.class);
                    instrumentPriceRequestHandler.handle(session, subscribePriceRequest);
                }
                case "UnsubscribePriceRequest" -> {
                    UnsubscribePriceRequest unsubscribePriceRequest = mapper.treeToValue(bodyNode, UnsubscribePriceRequest.class);
                    unsubscribePriceRequestHandler.handle(session, unsubscribePriceRequest);
                }
                default -> {
                    System.out.println("msg arrived");
                }
            }
        }
        catch(JsonParseException e) {
            e.printStackTrace();
        }
    }
}
