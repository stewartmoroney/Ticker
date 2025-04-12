import { bind } from "@react-rxjs/core";
import { Subject } from "rxjs";
import { filter, scan, startWith, tap } from "rxjs/operators";
import { v4 as uuid } from "uuid";

import { messages$, send } from "../getMessages$";
import {
  PriceSubscribeRequestMessageType,
  UnsubscribePriceRequestMessageType
} from "../messages";

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
    tap(msg => {
      const correlationId = uuid();
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
      send(req);
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
      return [...subscriptions];
    case "UnsubscribePriceResponse":
      return subscriptions.filter(sub => sub !== msg.instrumentId);
  }
};

export const subscribedPricesState$ = messages$.pipe(
  filter(isSubscriptionStateMessage),
  scan(subscriptionsReducer, [] as string[])
);

export const [useSubscribedInstruments] = bind(
  subscribedPricesState$.pipe(startWith([] as string[]))
);
