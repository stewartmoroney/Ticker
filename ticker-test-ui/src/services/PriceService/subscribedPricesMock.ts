import { Observable, Observer } from "rxjs";

import { Price } from "../../state/types";
import { subscribedPrices } from "./index";

const mock: subscribedPrices = (): Observable<Price> =>
  Observable.create((observer: Observer<Price>) => {
    setInterval(() => {
      const price: Price = {
        instrumentId: Math.ceil(Math.random() * 3).toString(),
        value: Math.random() * 1234
      };
      observer.next(price);
    }, 500);

    return;
  });

export default mock;
