package com.sm.ticker.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TicketPricesServerApp {
    public static void main (String[] args) {
        System.out.println("staring");
        SpringApplication.run(TicketPricesServerApp.class, args);
    }
}
