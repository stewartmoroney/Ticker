package com.sm.ticker.server.messages;

public class UnsubscribePriceRequest extends Message {
    private String instrumentId;
    private String correlationId;

    public UnsubscribePriceRequest(){}
    public UnsubscribePriceRequest(String instrumentId, String correlationId) {
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
