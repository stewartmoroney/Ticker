package com.sm.ticker.server.messages;

public class UnsubscribePriceResponse {
    private final String type = "UnsubscribePriceResponse";
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

    public UnsubscribePriceResponse(String correlationId, String instrumentId) {
        this.correlationId = correlationId;
        this.instrumentId = instrumentId;
    }
}
