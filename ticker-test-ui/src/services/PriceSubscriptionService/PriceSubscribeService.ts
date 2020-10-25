import { bind, shareLatest } from "@react-rxjs/core";
import { defer, EMPTY, Subject } from "rxjs";
import { filter, mergeMap, scan, startWith } from "rxjs/operators";
import uuid from "uuid";

import getMessages$, { send } from "../getMessages$";
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
    mergeMap(msg => {
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
      return EMPTY;
    }),
    shareLatest()
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
    getMessages$().pipe(
      filter(isSubscriptionStateMessage),
      scan(subscriptionsReducer, [] as string[]),
      shareLatest()
    )
  );

export const [useSubscribedInstruments] = bind(
  subscribedPricesState$().pipe(startWith([] as string[]))
);
