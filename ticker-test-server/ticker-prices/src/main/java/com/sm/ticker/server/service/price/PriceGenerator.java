package com.sm.ticker.server.service.price;

import com.sm.ticker.server.model.Price;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class PriceGenerator {

    public static final long MAX_PRICE = 1000L;

    public Price generatePrice() {
        final double numberOfInstruments = 3;
        final int index = (int) Math.ceil(Math.random() * numberOfInstruments);

        final BigDecimal newPriceValue = new BigDecimal(Math.random() * MAX_PRICE);
        return new Price(String.valueOf(index), newPriceValue);
    }
}
