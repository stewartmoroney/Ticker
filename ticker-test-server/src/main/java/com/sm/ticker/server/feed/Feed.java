package com.sm.ticker.server.feed;

import com.sm.ticker.server.messages.UserSession;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Consumer;
import java.util.stream.Collectors;

@Slf4j
public abstract class Feed<T> {

    protected final Map<UserSession, Consumer<T>> updateListeners = new HashMap<>();

    public void handleDataUpdate(T data) {
        getTargetClients(data).stream().map(updateListeners::get).filter(Objects::nonNull).forEach(l -> l.accept(data));
    }

    private List<UserSession> getTargetClients(T data) {
        List<UserSession> sessions = updateListeners.keySet().stream().collect(Collectors.toList());
        log.info("Update relevant to {} sessions", updateListeners.size());
        return sessions;
    }

}
