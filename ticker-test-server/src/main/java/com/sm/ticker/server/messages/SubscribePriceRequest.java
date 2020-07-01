package com.sm.ticker.server.messages;

public class SubscribePriceRequest extends Message {
    private String instrumentId;

    public SubscribePriceRequest(){}
    public SubscribePriceRequest(String instrumentId) {
        this.instrumentId = instrumentId;
    }

    public String getInstrumentId() {
        return instrumentId;
    }
}
