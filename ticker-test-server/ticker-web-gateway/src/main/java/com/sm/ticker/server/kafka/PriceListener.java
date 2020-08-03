package com.sm.ticker.server.kafka;

import com.sm.ticker.server.model.Price;
import com.sm.ticker.server.service.price.PriceService;
import com.sm.ticker.server.service.publish.PublishService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Slf4j
@Component
public class PriceListener {

    @Autowired
    PriceService priceService;

    @Autowired
    private PublishService publishService;

    @KafkaListener(groupId = "group_json",
            containerFactory = "priceKafkaListenerFactory",
            topics = "price")
    public void listen(Price price) throws IOException {
        log.debug("kafka msg arrived " + price);
        priceService.update(price);

        publishService.notifyPriceUpdate(price);
    }
}
