package com.sm.ticker.server.messages;

public class SubscribePriceResponse {

    private final String type = "SubscribePriceResponse";
    private String correlationId;
    private String instrumentId;

    public String getType() {
        return type;
    }

    public String getCorrelationId() {
        return correlationId;
    }

    public String getInstrumentId() {
        return instrumentId;
    }

    public SubscribePriceResponse(String correlationId, String instrumentId) {
        this.correlationId = correlationId;
        this.instrumentId = instrumentId;
    }
}
