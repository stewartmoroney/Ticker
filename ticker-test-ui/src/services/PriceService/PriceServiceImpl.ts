import { Observable, Observer } from "rxjs";

import { Price } from "../../state/types";
import { IAppAction, newPrice } from "../redux/actions";
import { IPriceService } from ".";

export class PriceServiceImpl implements IPriceService {
  public subscribe = (webSocket: WebSocket): Observable<IAppAction> =>
    Observable.create((observer: Observer<IAppAction>) => {
      webSocket.addEventListener("message", function(evt: MessageEvent) {
        const data = JSON.parse(evt.data);
        if (data.type === "PriceUpdate") {
          const price: Price = data.price;
          observer.next(newPrice(price));
        }
      });

      return () => {
        //do unsub here
      };
    });
}
