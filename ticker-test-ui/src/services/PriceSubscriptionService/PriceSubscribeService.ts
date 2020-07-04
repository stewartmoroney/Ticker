import { Observable, Observer } from "rxjs";
import uuid from "uuid";

import {
  PriceSubscribeRequestMessage,
  PriceSubscribeRequestMessageType,
  UnsubscribePriceRequestMessage,
  UnsubscribePriceRequestMessageType
} from "../messages";
import { priceSubscribe, priceUnsubscribe } from ".";

export const priceSubscribeImpl: priceSubscribe = (
  webSocket: WebSocket,
  id: string
): Observable<boolean> =>
  Observable.create((observer: Observer<boolean>) => {
    const correlationId = uuid();

    webSocket.addEventListener("message", function(evt: MessageEvent) {
      const data = JSON.parse(evt.data);
      if (
        data.type === "SubscribePriceResponse" &&
        data.correlationId === correlationId
      ) {
        observer.next(true);
        observer.complete();
      }
    });

    const req: PriceSubscribeRequestMessage = {
      type: PriceSubscribeRequestMessageType,
      body: {
        instrumentId: id,
        correlationId
      }
    };

    webSocket.send(JSON.stringify(req));
    return () => {
      //do unsub here
    };
  });

export const priceUnsubscribeImpl: priceUnsubscribe = (
  webSocket: WebSocket,
  id: string
): Observable<boolean> =>
  Observable.create((observer: Observer<boolean>) => {
    const correlationId = uuid();

    webSocket.addEventListener("message", function(evt: MessageEvent) {
      const data = JSON.parse(evt.data);
      if (
        data.type === "UnsubscribePriceResponse" &&
        data.correlationId === correlationId
      ) {
        observer.next(true);
        observer.complete();
      }
    });

    const req: UnsubscribePriceRequestMessage = {
      type: UnsubscribePriceRequestMessageType,
      body: {
        instrumentId: id,
        correlationId
      }
    };

    webSocket.send(JSON.stringify(req));
    return () => {
      //do unsub here
    };
  });
