package com.sm.ticker.server.kafka;

import com.sm.ticker.server.model.Price;
import com.sm.ticker.server.service.price.PriceService;
import com.sm.ticker.server.service.publish.PublishService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.io.IOException;
import java.math.BigDecimal;

class PriceListenerTest {

    @Mock
    PriceService priceService;

    @Mock
    private PublishService publishService;

    @InjectMocks
    PriceListener priceListener;

    @BeforeEach
    public void setup () {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void shouldStoreAndPublishNewPrice() throws IOException {
        //when
        Price newPrice = new Price("1", new BigDecimal(1234.1234));
        priceListener.listen(newPrice);

        //then
        Mockito.verify(priceService).update(newPrice);
        Mockito.verify(publishService).notifyPriceUpdate(newPrice);
        Mockito.verifyNoMoreInteractions(priceService);
        Mockito.verifyNoMoreInteractions(publishService);
    }
}