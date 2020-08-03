package com.sm.ticker.server.messages;

public class UnsubscribePriceResponse {
    private final String type = "UnsubscribePriceResponse";
    private String correlationId;

    public String getType() {
        return type;
    }

    public String getCorrelationId() {
        return correlationId;
    }

    public UnsubscribePriceResponse(String correlationId) {
        this.correlationId = correlationId;
    }
}
