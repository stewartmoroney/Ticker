import { defer } from "rxjs";
import { filter, map, scan, shareReplay } from "rxjs/operators";

import { Price } from "../../state/types";
import getMessages$, { Message } from "../getMessages$";

type PriceMessage = {
  type: "PriceUpdate";
  price: Price;
};

const isPriceMessage = (data: Message): data is PriceMessage =>
  data.type === "PriceUpdate";

export const subscribedPrices$ = defer(() =>
  getMessages$().pipe(
    filter(isPriceMessage),
    map(msg => msg.price),
    scan((acc, p) => [...acc, p], [] as Price[]),
    shareReplay(1)
  )
);
