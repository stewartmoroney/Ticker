import { Observable, Observer } from "rxjs";

import { Price } from "../../state/types";
import { IAppAction, newPrice } from "../redux/actions";
import { subscribePrices } from "./index";

const mock: subscribePrices = (webSocket: WebSocket): Observable<IAppAction> =>
  Observable.create((observer: Observer<IAppAction>) => {
    setInterval(() => {
      const price: Price = {
        instrumentId: Math.ceil(Math.random() * 3).toString(),
        value: Math.random() * 1234
      };
      observer.next(newPrice(price));
    }, 500);

    return;
  });

export default mock;
