package com.sm.ticker.server.model;

public class Instrument {
    private String id;
    private String name;

    public Instrument(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
