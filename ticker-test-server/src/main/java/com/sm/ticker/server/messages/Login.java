package com.sm.ticker.server.messages;

import lombok.Value;

@Value
public class Login implements Request {
    private final String id;
}
