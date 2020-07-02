package com.sm.ticker.server.service.publish;

import com.sm.ticker.server.messages.PriceUpdate;
import com.sm.ticker.server.model.Price;
import com.sm.ticker.server.service.message.MessageService;
import com.sm.ticker.server.service.session.SessionService;
import com.sm.ticker.server.service.subscription.PriceSubscriptionService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

public class PublishServiceTest {

    public static final String SESSION_1 = "session1";
    public static final String SESSION_2 = "session2";
    public static final String SESSION_3 = "session3";
    public static final String SESSION_4 = "session4";

    @Mock
    private PriceSubscriptionService priceSubscriptionService;

    @Mock
    private SessionService sessionService;

    @Mock
    private MessageService messageService;

    @Mock
    private WebSocketSession wsSession1;

    @Mock
    private WebSocketSession wsSession2;

    @Mock
    private WebSocketSession wsSession3;

    @Mock
    private WebSocketSession wsSession4;

    @InjectMocks
    private PublishService publishService = new PublishService();

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void shouldNotifySubscribedSessionForPrice() throws IOException {
        //given
        final Price price = new Price("inst1", new BigDecimal(1223.1234));
        final List<String> subscribedSessions = Arrays.asList(SESSION_2, SESSION_4);

        Mockito.when(priceSubscriptionService.getSubscribedSessionIds(price.getInstrumentId())).thenReturn(subscribedSessions);
        Mockito.when(sessionService.openSessions()).thenReturn(Arrays.asList(wsSession1, wsSession2, wsSession3, wsSession4));
        Mockito.when(wsSession1.getId()).thenReturn(SESSION_1);
        Mockito.when(wsSession2.getId()).thenReturn(SESSION_2);
        Mockito.when(wsSession3.getId()).thenReturn(SESSION_3);
        Mockito.when(wsSession4.getId()).thenReturn(SESSION_4);

        //when
        publishService.notifyPriceUpdate(price);

        //then
        ArgumentCaptor<PriceUpdate> argument = ArgumentCaptor.forClass(PriceUpdate.class);

        Mockito.verify(messageService).send(ArgumentMatchers.eq(wsSession2), argument.capture());
        Assertions.assertEquals(price, argument.getValue().getPrice());

        Mockito.verify(messageService).send(ArgumentMatchers.eq(wsSession4), argument.capture());
        Assertions.assertEquals(price, argument.getValue().getPrice());

        Mockito.verifyNoMoreInteractions(messageService);
    }
}
