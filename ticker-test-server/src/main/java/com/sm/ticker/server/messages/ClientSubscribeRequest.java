package com.sm.ticker.server.messages;

import lombok.Value;

@Value
public class ClientSubscribeRequest implements Request {
    private final String myId;
    private final String someData;
}
