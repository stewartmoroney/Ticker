package com.sm.ticker.server.messages;

public class UnsubscribePriceRequest extends Message {
    private String instrumentId;

    public UnsubscribePriceRequest(){}
    public UnsubscribePriceRequest(String instrumentId) {
        this.instrumentId = instrumentId;
    }

    public String getInstrumentId() {
        return instrumentId;
    }
}
