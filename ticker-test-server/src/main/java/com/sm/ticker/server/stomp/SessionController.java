package com.sm.ticker.server.stomp;

import com.google.common.collect.*;
import com.sm.ticker.server.messages.UserSession;
import com.sm.ticker.server.model.User;
import lombok.Synchronized;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Slf4j
@Controller
// TODO: 13/07/2017 Refactor this class - SW and AG
public class SessionController {
    public static final String SESSION_USER_ATTR = "loggedInUser";

    private Multimap<String, UserSession> userIdToSessions = ArrayListMultimap.create();

    private Map<String, UserSession> userSessionMap = Maps.newHashMap();

    public void registerSession(UserSession userSession){
        userSessionMap.put(userSession.getId(), userSession);
    };

    @Synchronized
    public void onStompConnected(SimpMessageHeaderAccessor stompAccessor, User user) {
        if (user == null) {
            // This is the case when SSO is disabled, for example when using the test harness.
            return;
        }
        bindUserToSession(stompAccessor, user);
    }

    @Synchronized
    public void onStompDisconnected(SimpMessageHeaderAccessor stompAccessor) {
        loggedInUser(stompAccessor.getSessionAttributes()).ifPresent(user -> {
            unbindUserFromSession(stompAccessor, user.getId());
        });
    }

    private Optional<User> loggedInUser(Map<String, Object> webSocketSessionAttributes) {
        return Optional.ofNullable((User) webSocketSessionAttributes.get(SESSION_USER_ATTR));
    }

    public UserSession getUserSession(SimpMessageHeaderAccessor accessor) {
        return loggedInUser(accessor.getSessionAttributes())
                .map(user -> new UserSession(accessor.getSessionId(), user.getId()))
                .orElseGet(() -> new UserSession(accessor.getSessionId(), null));
    }

    public void bindUserToSession(SimpMessageHeaderAccessor stompAccessor, User user) {
        String sessionId = stompAccessor.getSessionId();
        Map<String, Object> sessionAttributes = stompAccessor.getSessionAttributes();
        loggedInUser(sessionAttributes).ifPresent(existingUser -> {
            log.warn("Session {} already bound to user {}", sessionId, existingUser);
        });

        log.info("Binding session {} to user {}", sessionId, user);
        sessionAttributes.put(SESSION_USER_ATTR, user);
        UserSession userSession = new UserSession(sessionId, user.getId());
        if (!userIdToSessions.get(user.getId()).contains(userSession)) {
            userIdToSessions.put(user.getId(), userSession);
        }
    }

    private void unbindUserFromSession(SimpMessageHeaderAccessor stompAccessor, String userId) {
        String sessionId = stompAccessor.getSessionId();
        Map<String, Object> sessionAttributes = stompAccessor.getSessionAttributes();

        log.info("Unbinding user {} from session {}", userId, sessionId);
        sessionAttributes.remove(SESSION_USER_ATTR);
        userIdToSessions.remove(userId, new UserSession(sessionId, userId));
    }

    @Synchronized
    public List<UserSession> getUserSessionsFor(Set<String> userIds) {
        return userIds.stream()
                .filter(userId -> userIdToSessions.containsKey(userId))
                .flatMap(userId -> userIdToSessions.get(userId).stream())
                .collect(Collectors.toList());
    }

    @Synchronized
    public List<UserSession> getAllUserSessions() {
//        return userSessionMap.values().stream().collect(Collectors.toList());
        return Stream.of(userIdToSessions)
                .flatMap(userSessions -> userSessions.values().stream()).collect(Collectors.toList());
    }
}
