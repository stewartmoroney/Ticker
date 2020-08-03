# Ticket Demo App 

## Overview
A react/redux app that subscribes via web socket to a java backend and receives a stream of values to display.  
Prices are sent from ticker-prices server to ticker-web-gateway via kafka.  

## Start zookeeper
zookeeper-server-start /usr/local/etc/kafka/zookeeper.properties

## Start kafka
kafka-server-start /usr/local/etc/kafka/server.properties

## To run server
gradle build  
gradle ticker-prices:bootRun  
gradle ticker-web-gateway:bootRun  

## To run client
requires node, npm  

npm install  
npm start  
