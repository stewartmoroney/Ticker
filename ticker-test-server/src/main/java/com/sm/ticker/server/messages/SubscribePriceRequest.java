package com.sm.ticker.server.messages;

public class SubscribePriceRequest extends Message {
    private String instrumentId;
    private String correlationId;

    public SubscribePriceRequest(){}

    public SubscribePriceRequest(String instrumentId, String correlationId) {
        this.instrumentId = instrumentId;
        this.correlationId = correlationId;
    }

    public String getInstrumentId() {
        return instrumentId;
    }

    public String getCorrelationId() {
        return correlationId;
    }
}
