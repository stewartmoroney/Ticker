import { bind, shareLatest } from "@react-rxjs/core";
import { defer } from "rxjs";
import { filter, map, scan, startWith } from "rxjs/operators";

import { Price } from "../../state/types";
import getMessages$, { Message } from "../getMessages$";

type PriceMessage = {
  type: "PriceUpdate";
  price: Price;
};

const isPriceMessage = (data: Message): data is PriceMessage =>
  data.type === "PriceUpdate";

type PriceState = Price[];

const priceReducer = (acc: PriceState, p: Price) => {
  const index = acc.findIndex(ap => ap.instrumentId === p.instrumentId);
  return [...acc.slice(0, index), p, ...acc.slice(index, acc.length)];
};

export const subscribedPrices$ = defer(() =>
  getMessages$().pipe(
    filter(isPriceMessage),
    map(msg => msg.price),
    scan(priceReducer, [])
  )
);

export const [useSubscribedPrices] = bind(
  subscribedPrices$.pipe(startWith([] as PriceState))
);
