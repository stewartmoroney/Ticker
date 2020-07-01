package com.sm.ticker.server.service.subscription;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Component
public class PriceSubscriptionService {

    private Map<String, ArrayList<String>> sessionPriceSubscriptions = new HashMap<>();

    public synchronized void subscribe(String sessionId, String instrumentId) {
        ArrayList<String> subscribedInstruments = sessionPriceSubscriptions.getOrDefault(sessionId, new ArrayList<>());
        int index = subscribedInstruments.indexOf(instrumentId);
        if(index == -1 ) {
            subscribedInstruments.add(instrumentId);
            sessionPriceSubscriptions.put(sessionId, subscribedInstruments);
        }
    }

    public synchronized void unsubscribe(String sessionId, String instrumentId) {
        ArrayList<String> subscribedInstruments = sessionPriceSubscriptions.getOrDefault(sessionId, new ArrayList<>());
        int index = subscribedInstruments.indexOf(instrumentId);
        if(index >= 0 ) {
            subscribedInstruments.remove(instrumentId);
            sessionPriceSubscriptions.put(sessionId, subscribedInstruments);
        }
    }

    public synchronized ArrayList<String> getSubscriptionsForSession(String sessionId) {
        return sessionPriceSubscriptions.getOrDefault(sessionId, new ArrayList<>());
    }
}
