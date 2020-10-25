import { bind } from "@react-rxjs/core";
import { filter, map, scan, startWith } from "rxjs/operators";

import { Price } from "../../state/types";
import { mesages$, Message } from "../getMessages$";

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

export const subscribedPrices$ = mesages$.pipe(
  filter(isPriceMessage),
  map(msg => msg.price),
  scan(priceReducer, [])
);

export const [useSubscribedPrices] = bind(
  subscribedPrices$.pipe(startWith([] as PriceState))
);
