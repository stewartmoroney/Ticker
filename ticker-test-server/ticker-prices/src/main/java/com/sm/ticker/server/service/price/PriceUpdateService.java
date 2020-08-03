package com.sm.ticker.server.service.price;

import com.sm.ticker.server.model.Price;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Configuration
@EnableScheduling
public class PriceUpdateService {

    @Autowired
    private PriceGenerator priceGenerator;

    @Autowired
    private KafkaTemplate<String, Price> kafkaTemplate;

    @Scheduled(fixedRate = 5000)
    public void updatePrices() {
        final Price newPrice = priceGenerator.generatePrice();
        kafkaTemplate.send("price",  newPrice);
    }
}
