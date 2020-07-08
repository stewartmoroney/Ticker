package gradle.cucumber;

import com.sm.ticker.server.TicketTestServerApp;
import io.cucumber.java.Before;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketHttpHeaders;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.client.WebSocketClient;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.net.URI;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutionException;

public class ServerSteps {

    static {
        TicketTestServerApp.start(new String[]{});
    }

    String url = "ws://localhost:8080/app";
    final WebSocketClient webSocketClient = new StandardWebSocketClient();
    WebSocketSession webSocketSession;
    String receivedMessage="";

    @When("A new Session is started")
    public void a_new_Session_is_started() throws ExecutionException, InterruptedException, IOException {
        CountDownLatch connectedLatch = new CountDownLatch(1);
        webSocketSession = webSocketClient.doHandshake(new TextWebSocketHandler() {
            @Override
            public void handleTextMessage(WebSocketSession session, TextMessage message) {
                System.out.println("received message - " + message.getPayload());
            }
            @Override
            public void afterConnectionEstablished(WebSocketSession session) {
                System.out.println("handler connected");
                connectedLatch.countDown();
            }
        }, new WebSocketHttpHeaders(), URI.create(url)).get();
        connectedLatch.await();
        webSocketSession.close();
    }

    @When("Session requests instruments")
    public void a_message_is_sent(String msg) throws ExecutionException, InterruptedException, IOException {
        CountDownLatch messageLatch = new CountDownLatch(1);
        webSocketSession = webSocketClient.doHandshake(new TextWebSocketHandler() {
            @Override
            public void handleTextMessage(WebSocketSession session, TextMessage message) {
                receivedMessage = message.getPayload();
                messageLatch.countDown();;
            }
            @Override
            public void afterConnectionEstablished(WebSocketSession session) {}
        }, new WebSocketHttpHeaders(), URI.create(url)).get();
        webSocketSession.sendMessage(new TextMessage(msg));
        messageLatch.await();
    }

    @When("session expects response")
    public void expect_message(String expected) {
        Assertions.assertEquals(expected, receivedMessage);
    }

    @When("An existing Session is closed")
    public void an_existing_Session_is_closed() throws IOException {
        webSocketSession.close();
    }
}
