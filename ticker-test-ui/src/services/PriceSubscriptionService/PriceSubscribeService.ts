import { Observable, Observer } from "rxjs";
import uuid from "uuid";

import {
  PriceSubscribeRequestMessage,
  PriceSubscribeRequestMessageType,
  UnsubscribePriceRequestMessage,
  UnsubscribePriceRequestMessageType
} from "../messages";
import { IPriceSubscribeService } from "./index";

export class PriceSubscribeService implements IPriceSubscribeService {
  public sendSubscribeRequest = (
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
          // observer.next(priceSubscribeAck);
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

  public sendUnsubscribeRequest = (
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
          // observer.next(priceUnsubscribeAck);
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
}
