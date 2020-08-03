package com.sm.ticker.server.messages;

import com.sm.ticker.server.model.Price;

public class PriceUpdate {

    private Price price;
    private final String type = "PriceUpdate";

    public PriceUpdate(Price price) {
        this.price = price;
    }

    public String getType() {
        return this.type;
    }

    public Price getPrice() {
        return this.price;
    }
}
