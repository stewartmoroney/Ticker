package com.sm.ticker.server.service.price;

import com.sm.ticker.server.model.Price;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
@Slf4j
public class PriceService {

    Map<String, Price> prices = new HashMap<String, Price>();

    public synchronized void update(Price price) {
        prices.put(price.getInstrumentId(), price);
        log.debug("price update " + price.getInstrumentId() + " new price " + price.getValue());
    }
}
