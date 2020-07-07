package com.sm.ticker.server.service.price;

import com.sm.ticker.server.model.Price;
import com.sm.ticker.server.service.publish.PublishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.io.IOException;

@Configuration
@EnableScheduling
public class PriceUpdateService {

    @Autowired
    private PriceService priceService;

    @Autowired
    private PublishService publishService;

    @Autowired
    private PriceGenerator priceGenerator;

    @Scheduled(fixedRate = 500)
    public void updatePrices() throws IOException {
        final Price newPrice = priceGenerator.generatePrice();
        priceService.update(newPrice);
        publishService.notifyPriceUpdate(newPrice);
    }
}
