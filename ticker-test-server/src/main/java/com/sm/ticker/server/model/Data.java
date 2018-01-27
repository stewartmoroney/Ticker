package com.sm.ticker.server.model;

import lombok.Value;

import java.io.Serializable;
import java.time.Instant;
import java.util.Collection;

@Value
public class Data implements Serializable {

    private Collection<Row> rows;
    private Instant timeStamp;

}
