package com.sm.ticker.server.model;

import java.math.BigDecimal;

public class Price {

    private final String instrumentId;
    private final BigDecimal value;

    public Price(String instrumentId, BigDecimal value) {
        this.instrumentId = instrumentId;
        this.value = value;
    }

    public String getInstrumentId() {
        return instrumentId;
    }

    public BigDecimal getValue() {
        return value;
    }
}
