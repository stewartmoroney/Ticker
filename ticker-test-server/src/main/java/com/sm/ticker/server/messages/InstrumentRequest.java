package com.sm.ticker.server.messages;

public class InstrumentRequest extends Message {
    private String uid;

    public InstrumentRequest(){}
    public InstrumentRequest(String uid) {
        this.uid = uid;
    }

    public String getUid() {
        return uid;
    }
    public void setUid(String uid) {
        this.uid = uid;
    }
}
