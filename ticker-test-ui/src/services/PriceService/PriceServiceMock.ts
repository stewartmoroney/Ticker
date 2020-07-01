import { Observer, Observable } from "rxjs";

import { IPriceService } from './index';

import { IAppAction, newPrice } from "../redux/actions";
import { Price } from "../../state/types";

export class PriceServiceMock implements IPriceService {
  public subscribe = (webSocket: WebSocket): Observable<IAppAction> => {
    return Observable.create((observer: Observer<IAppAction>) => {

      setInterval(() => {
        const price: Price = {
          instrumentId: (Math.ceil(Math.random() * 3)).toString(),
          value: (Math.random() * 1234),
        };
        observer.next(newPrice(price));
      }, 500);

      return;
    }); 
  }
};
