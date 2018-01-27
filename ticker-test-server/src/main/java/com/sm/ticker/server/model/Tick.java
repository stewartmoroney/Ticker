package com.sm.ticker.server.model;

import lombok.Value;

import java.io.Serializable;
import java.time.Instant;

@Value
public class Tick implements Serializable{
    private String id;
    private Instant timeStamp;
}
