package com.sm.ticker.server;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.sm.ticker.server"})
public class TicketTestServerApp {
    public static void main(String[] args) {
        SpringApplication.run(TicketTestServerApp.class, args);
    }
}