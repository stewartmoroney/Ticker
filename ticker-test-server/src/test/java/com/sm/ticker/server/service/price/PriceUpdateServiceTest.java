package com.sm.ticker.server.service.price;

import com.sm.ticker.server.model.Price;
import com.sm.ticker.server.service.price.PriceGenerator;
import com.sm.ticker.server.service.price.PriceService;
import com.sm.ticker.server.service.price.PriceUpdateService;
import com.sm.ticker.server.service.publish.PublishService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.math.BigDecimal;

public class PriceUpdateServiceTest {

    @Mock
    private PriceService priceService;

    @Mock
    private PublishService publishService;

    @Mock
    private PriceGenerator priceGenerator;

    @InjectMocks
    private PriceUpdateService priceUpdateService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void shouldUpdateGeneratedPrice(){
        //given
        final Price aPrice = new Price("instr1", new BigDecimal(1234.1234));
        Mockito.when(priceGenerator.generatePrice()).thenReturn(aPrice);

        //when
        priceUpdateService.updatePrices();

        //then
        Mockito.verify(priceService).update(aPrice);
        Mockito.verifyNoMoreInteractions(priceService);
        Mockito.verify(publishService).notifyPriceUpdate(aPrice);
        Mockito.verifyNoMoreInteractions(publishService);
    }
}
