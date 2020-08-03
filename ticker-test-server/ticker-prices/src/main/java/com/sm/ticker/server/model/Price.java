package com.sm.ticker.server.model;

import java.math.BigDecimal;

public class Price {

    private String instrumentId;
    private BigDecimal value;

    public Price() {}

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
