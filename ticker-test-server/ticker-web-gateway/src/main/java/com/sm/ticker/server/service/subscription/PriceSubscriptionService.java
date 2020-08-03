package com.sm.ticker.server.service.subscription;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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

    public synchronized List<String> getSubscriptionsForSession(String sessionId) {
        return sessionPriceSubscriptions.getOrDefault(sessionId, new ArrayList<>());
    }

    public synchronized List<String> getSubscribedSessionIds(String instrumentId) {
        return sessionPriceSubscriptions.entrySet()
            .stream()
            .filter(entry -> {
                return entry.getValue().contains(instrumentId);
            })
            .map(entry -> entry.getKey())
            .collect(Collectors.toList());
    }

    public synchronized void clearSubscriptions(String sessionId) {
        ArrayList<String> subscribedInstruments = sessionPriceSubscriptions.remove(sessionId);
    }
}
