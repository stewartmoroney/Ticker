package com.sm.ticker.server.messages;

import lombok.Value;

import java.io.Serializable;

@Value
public class UserSession implements Serializable {
    private final String id;
    private final String userId;
}
