package com.sm.ticker.server.service.subscription;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PriceSubscriptionServiceTest {

    public static final String SESSION_1 = "session1";
    public static final String SESSION_2 = "session2";

    public static final String INSTRUMENT_1 = "ins1";
    public static final String INSTRUMENT_2 = "ins2";

    PriceSubscriptionService priceSubscriptionService = new PriceSubscriptionService();

    @Test
    public void shouldAddAndRemoveSubscriptions() {
        priceSubscriptionService.subscribe(SESSION_1, INSTRUMENT_1);
        assertEquals(priceSubscriptionService.getSubscriptionsForSession(SESSION_1).size(), 1);
        assertEquals(priceSubscriptionService.getSubscriptionsForSession(SESSION_1).get(0), INSTRUMENT_1);

        priceSubscriptionService.subscribe(SESSION_1, INSTRUMENT_2);
        assertEquals(priceSubscriptionService.getSubscriptionsForSession(SESSION_1).size(), 2);
        assertEquals(priceSubscriptionService.getSubscriptionsForSession(SESSION_1).get(0), INSTRUMENT_1);
        assertEquals(priceSubscriptionService.getSubscriptionsForSession(SESSION_1).get(1), INSTRUMENT_2);

        priceSubscriptionService.subscribe(SESSION_2, INSTRUMENT_1);
        assertEquals(priceSubscriptionService.getSubscriptionsForSession(SESSION_2).size(), 1);
        assertEquals(priceSubscriptionService.getSubscriptionsForSession(SESSION_2).get(0), INSTRUMENT_1);

        priceSubscriptionService.subscribe(SESSION_2, INSTRUMENT_2);
        assertEquals(priceSubscriptionService.getSubscriptionsForSession(SESSION_2).size(), 2);
        assertEquals(priceSubscriptionService.getSubscriptionsForSession(SESSION_2).get(0), INSTRUMENT_1);
        assertEquals(priceSubscriptionService.getSubscriptionsForSession(SESSION_2).get(1), INSTRUMENT_2);

        priceSubscriptionService.unsubscribe(SESSION_1, INSTRUMENT_1);
        assertEquals(priceSubscriptionService.getSubscriptionsForSession(SESSION_1).size(), 1);
        assertEquals(priceSubscriptionService.getSubscriptionsForSession(SESSION_1).get(0), INSTRUMENT_2);

    }

    @Test
    public void shouldNotAllowDuplicateSubscriptions() {
        priceSubscriptionService.subscribe(SESSION_1, INSTRUMENT_1);
        assertEquals(priceSubscriptionService.getSubscriptionsForSession(SESSION_1).size(), 1);

        priceSubscriptionService.subscribe(SESSION_1, INSTRUMENT_1);
        assertEquals(priceSubscriptionService.getSubscriptionsForSession(SESSION_1).size(), 1);
    }
}