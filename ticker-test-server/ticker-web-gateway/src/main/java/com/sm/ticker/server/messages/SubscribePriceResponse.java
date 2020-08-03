package com.sm.ticker.server.messages;

public class SubscribePriceResponse {

    private final String type = "SubscribePriceResponse";
    private String correlationId;

    public String getType() {
        return type;
    }

    public String getCorrelationId() {
        return correlationId;
    }

    public SubscribePriceResponse(String correlationId) {
        this.correlationId = correlationId;
    }
}
