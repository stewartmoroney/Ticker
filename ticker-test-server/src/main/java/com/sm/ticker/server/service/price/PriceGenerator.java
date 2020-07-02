package com.sm.ticker.server.service.price;

import com.sm.ticker.server.model.Instrument;
import com.sm.ticker.server.model.Price;
import com.sm.ticker.server.service.instrument.InstrumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class PriceGenerator {

    public static final long MAX_PRICE = 1000L;

    @Autowired
    private InstrumentService instrumentService;

    public Price generatePrice() {
        final Instrument[] instruments = instrumentService.getInstruments();
        final double numberOfInstruments = instruments.length;
        final int index = (int) Math.ceil(Math.random() * numberOfInstruments) - 1;

        final Instrument instrumentToUpdate = instruments[index];
        final BigDecimal newPriceValue = new BigDecimal(Math.random() * MAX_PRICE);
        return new Price(instrumentToUpdate.getId(), newPriceValue);

    }
}
