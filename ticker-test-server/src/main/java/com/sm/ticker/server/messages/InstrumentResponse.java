package com.sm.ticker.server.messages;

import com.sm.ticker.server.model.Instrument;

public class InstrumentResponse {

    private Instrument[] instruments;
    private final String type = "InstrumentResponse";

    public InstrumentResponse(Instrument[] instruments) {
        this.instruments = instruments;
    }

    public String getType() {
        return type;
    }

    public Instrument[] getInstruments() {
        return instruments;
    }
}
