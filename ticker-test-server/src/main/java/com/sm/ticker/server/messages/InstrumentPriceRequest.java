package com.sm.ticker.server.messages;

public class InstrumentPriceRequest extends Message {
    private String instrumentId;

    public InstrumentPriceRequest(){}
    public InstrumentPriceRequest(String instrumentId) {
        this.instrumentId = instrumentId;
    }

    public String getInstrumentId() {
        return instrumentId;
    }
}
