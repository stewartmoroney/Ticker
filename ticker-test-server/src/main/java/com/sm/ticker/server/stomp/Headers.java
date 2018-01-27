package com.sm.ticker.server.stomp;

import com.sm.ticker.server.messages.UserSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageType;

import java.time.Instant;

@Slf4j
public class Headers {
    private static final String CORRELATION_ID_HEADER = "correlationId";
    private static final String TIME_ID_HEADER = "currentTimeMillis";
    private static final String SUCCESS_HEADER = "success";
    private static final String ERROR_MESSAGE_HEADER = "errorMessage";

    private SimpMessageHeaderAccessor headerAccessor = SimpMessageHeaderAccessor.create(SimpMessageType.MESSAGE);

    public static Headers forSession(UserSession session) {
        Headers builder = new Headers();
        builder.headerAccessor.setSessionId(session.getId());
        return builder;
    }

    public Headers withTime(Instant time) {
        if (time != null)
            headerAccessor.setNativeHeader(TIME_ID_HEADER, String.valueOf(time.toEpochMilli()));
        return this;
    }

    public Headers withCorrelationId(String correlationId) {
        if (correlationId != null && !correlationId.isEmpty())
            headerAccessor.setNativeHeader(CORRELATION_ID_HEADER, correlationId);
        return this;
    }

    public MessageHeaders asSuccess() {
        headerAccessor.setNativeHeader(SUCCESS_HEADER, "true");
        return headerAccessor.getMessageHeaders();
    }

    public MessageHeaders asFailure(String errorMessage) {
        headerAccessor.setNativeHeader(SUCCESS_HEADER, "false");
        headerAccessor.setNativeHeader(ERROR_MESSAGE_HEADER, errorMessage);
        return headerAccessor.getMessageHeaders();
    }

    public static String getCorrelationId(SimpMessageHeaderAccessor accessor) {
        try {
            return accessor.getNativeHeader(CORRELATION_ID_HEADER).get(0);
        } catch (Exception e) {
            log.warn("Failed to get a correlation ID for the request");
            return "";
        }
    }

}
