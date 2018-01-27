package com.sm.ticker.server.model;

import lombok.Value;

import java.io.Serializable;
import java.math.BigDecimal;

@Value
public class Row implements Serializable {
    private String id;
    private String name;
    private BigDecimal value;
}
