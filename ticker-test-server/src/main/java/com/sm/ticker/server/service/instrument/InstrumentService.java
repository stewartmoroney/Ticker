package com.sm.ticker.server.service.instrument;

import com.sm.ticker.server.model.Instrument;
import org.springframework.stereotype.Component;

@Component
public class InstrumentService {

    private Instrument[] instruments = {
        new Instrument("1", "ins1"),
        new Instrument("2", "ins2"),
        new Instrument("3", "ins3")
    };

    public synchronized Instrument[] getInstruments() {
        return instruments;
    }
}
