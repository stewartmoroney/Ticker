package com.sm.ticker.server.json;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.sm.ticker.server.handlers.InstrumentPriceRequestHandler;
import com.sm.ticker.server.handlers.InstrumentRequestHandler;
import com.sm.ticker.server.messages.InstrumentPriceRequest;
import com.sm.ticker.server.messages.InstrumentRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

@Component
public class JsonMessageParser {

    @Autowired
    private InstrumentRequestHandler instrumentRequestHandler;

    @Autowired
    private InstrumentPriceRequestHandler instrumentPriceRequestHandler;


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
                case "InstrumentPriceRequest" -> {
                    InstrumentPriceRequest instrumentPriceRequest = mapper.treeToValue(bodyNode, InstrumentPriceRequest.class);
                    instrumentPriceRequestHandler.handle(session, instrumentPriceRequest);
                }
                case "UnsubscribeInstrumentPriceRequest" -> {



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
