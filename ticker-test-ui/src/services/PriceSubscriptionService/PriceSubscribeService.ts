import { defer, EMPTY, Subject } from "rxjs";
import { filter, map, scan, shareReplay, tap } from "rxjs/operators";
import uuid from "uuid";

import { getTransport } from "../getTransport";
import {
  PriceSubscribeRequestMessageType,
  UnsubscribePriceRequestMessageType
} from "../messages";
import subscribe from "../subscribe";

type SubMessage = {
  id: string;
  type: string;
};

export const instrumentSubscribe$ = new Subject<SubMessage>();

export const subscribeToInstrumentPrice = (id: string) => {
  instrumentSubscribe$.next({ id, type: "subscribe" });
};

export const unsubscribeToInstrumentPrice = (id: string) => {
  instrumentSubscribe$.next({ id, type: "unsubscribe" });
};

export const instrumentPriceSubscriptions$ = () =>
  instrumentSubscribe$.asObservable().pipe(
    map(msg => {
      const correlationId = uuid();
      const transport = getTransport();
      const req = {
        type:
          msg.type === "subscribe"
            ? PriceSubscribeRequestMessageType
            : UnsubscribePriceRequestMessageType,
        body: {
          instrumentId: msg.id,
          correlationId
        }
      };
      transport.send(JSON.stringify(req));
      return EMPTY;
    })
  );

type PriceSubscribeMessage = {
  type: "SubscribePriceResponse" | "UnsubscribePriceResponse";
  instrumentId: string;
};

const isSubscriptionStateMessage = (data: any): data is PriceSubscribeMessage =>
  data.type === "SubscribePriceResponse" ||
  data.type === "UnsubscribePriceResponse";

const subscriptionsReducer = (
  subscriptions: string[],
  msg: PriceSubscribeMessage
) => {
  switch (msg.type) {
    case "SubscribePriceResponse":
      if (!subscriptions.includes(msg.instrumentId)) {
        return [...subscriptions, msg.instrumentId];
      }
      break;
    case "UnsubscribePriceResponse":
      return subscriptions.filter(sub => sub !== msg.instrumentId);
  }
  return [...subscriptions];
};

export const subscribedPricesState$ = () =>
  defer(() =>
    subscribe().pipe(
      tap(msg => console.log("msg " + JSON.stringify(msg))),
      filter(isSubscriptionStateMessage),
      scan(subscriptionsReducer, [] as string[]),
      shareReplay(1)
    )
  );
