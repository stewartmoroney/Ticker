import { defer } from "rxjs";
import { filter, map, scan, shareReplay } from "rxjs/operators";

import { Price } from "../../state/types";
import { Message } from "../getMessages$";
import subscribe from "../subscribe";

type PriceMessage = {
  type: "PriceUpdate";
  price: Price;
};

const isPriceMessage = (data: Message): data is PriceMessage =>
  data.type === "PriceUpdate";

export const subscribedPrices$ = defer(() =>
  subscribe().pipe(
    filter(isPriceMessage),
    map(msg => msg.price),
    scan((acc, p) => [...acc, p], [] as Price[]),
    shareReplay(1)
  )
);
