package com.sm.ticker.server.service.instrument;

import com.sm.ticker.server.model.Instrument;
import org.springframework.stereotype.Component;

@Component
public class InstrumentService {

    private Instrument[] instruments = {
        new Instrument("1", "a"),
        new Instrument("2", "b"),
        new Instrument("3", "c")
    };

    public synchronized Instrument[] getInstruments() {
        return instruments;
    }

}
