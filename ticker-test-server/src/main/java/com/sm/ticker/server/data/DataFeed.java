package com.sm.ticker.server.data;


import com.sm.ticker.server.feed.Feed;
import com.sm.ticker.server.messages.UserSession;
import com.sm.ticker.server.model.Data;
import com.sm.ticker.server.stomp.SessionController;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;
import java.util.function.Consumer;

@Slf4j
@Service
@AllArgsConstructor

public class DataFeed extends Feed<Data>{

    public static final String SUBSCRIBE_ACK = "enjoy the data";
    public static final String UNSUBSCRIBE_ACK = "sorry to see you go";

    private final SessionController sessionController;

    public CompletableFuture<String> subscribe(UserSession userSession, Consumer<Data> updateListener) {
        updateListeners.put(userSession, updateListener);
        return CompletableFuture.completedFuture(SUBSCRIBE_ACK);
    }

    public CompletableFuture<String> unsubscribe(UserSession userSession) {
        updateListeners.remove(userSession);
        return CompletableFuture.completedFuture(UNSUBSCRIBE_ACK);
    }
}
