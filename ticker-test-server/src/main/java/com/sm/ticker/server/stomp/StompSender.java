package com.sm.ticker.server.stomp;

import com.sm.ticker.server.messages.UserSession;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.MessagingException;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Slf4j
@Service
@AllArgsConstructor
public class StompSender {

    private final SimpMessageSendingOperations messagingTemplate;
    private final String EMPTY_PAYLOAD = "{}";

    public Sender createSender(UserSession userSession, String correlationId) {
        return new Sender(userSession, correlationId);
    }

    @AllArgsConstructor
    public class Sender {

        private final UserSession userSession;
        private final String correlationId;

        public <T> void send(String endpoint, T data, Throwable error) {
            send(endpoint, data, error, null);
        }

        public <T> void send(String endpoint, T data, Throwable error, Instant time) {
            if (error == null) {
                sendData(endpoint, data, time);
            } else {
                sendError(endpoint, error);
            }
        }

        public <T> void sendData(String endpoint, T data) {
            sendData(endpoint, data, null);
        }

        public <T> void sendData(String endpoint, T data, Instant time) {
            try {
                log.info("Sending STOMP message to {}. Session {}, correlation {} time {}.", endpoint, userSession, correlationId, time);
                if (log.isDebugEnabled()) {
                    // Include data in the log message at debug level
                    log.debug("Sending STOMP message to {}. Session {}, correlation {} time {}. Data {}", endpoint, userSession, correlationId, time, data);
                }
                MessageHeaders headers = Headers.forSession(userSession).withCorrelationId(correlationId).withTime(time).asSuccess();
                Object payload = data != null ? data : EMPTY_PAYLOAD;
                messagingTemplate.convertAndSendToUser(userSession.getId(), endpoint, payload, headers);
            } catch (MessagingException e) {
                String message = String.format(
                        "There was a problem sending a message up to client. " +
                                "They'll likely disconnect soon, if not already. " +
                                "UserSession: %s; correlationId: %s; time: %s; endpoint: %s",
                        userSession,
                        correlationId,
                        time,
                        endpoint);
                log.warn(message, e);
            }
        }

        public void sendError(final String endpoint, final Throwable error) {
            log.warn("Sending STOMP failure message to {}. Session {}, correlation {}. Error: ", endpoint, userSession, correlationId, error);
            sendErrorInternal(endpoint, error.getMessage());
        }

        public void sendError(final String endpoint, final String errorMessage) {
            log.warn("Sending STOMP failure message to {}. Session {}, correlation {}. Error {}", endpoint, userSession, correlationId, errorMessage);
            sendErrorInternal(endpoint, errorMessage);
        }

        private void sendErrorInternal(final String endpoint, final String errorMessage) {
            try {
                log.warn("Sending STOMP failure message to {}. Session {}, correlation {}. Error {}", endpoint, userSession, correlationId, errorMessage);
                MessageHeaders headers = Headers.forSession(userSession).withCorrelationId(correlationId).asFailure(errorMessage);
                messagingTemplate.convertAndSendToUser(userSession.getId(), endpoint, EMPTY_PAYLOAD, headers);
            } catch (MessagingException e) {
                String message = String.format(
                        "There was a problem sending failure ACK up to client. " +
                                "They'll likely disconnect soon, if not already. " +
                                "UserSession: %s; correlationId: %s; endpoint: %s; errorMessage: %s",
                        userSession,
                        correlationId,
                        endpoint,
                        errorMessage);
                log.warn(message, e);
            }
        }
    }
}
