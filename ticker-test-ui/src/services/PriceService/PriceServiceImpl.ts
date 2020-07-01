import { IPriceService } from ".";
import { Observable, Observer } from "rxjs";
import { Price } from "../../state/types";
import { newPrice, IAppAction } from "../redux/actions";

export class PriceServiceImpl implements IPriceService {
  public subscribe = (webSocket: WebSocket): Observable<IAppAction> => {
    return Observable.create((observer: Observer<IAppAction>) => {

      // webSocket.addEventListener("message", function (evt: MessageEvent) {
      //   const data = JSON.parse(evt.data);
      //   console.log('mesage arrived - ' + data);
      //   if(data.type === 'InstrumentResponse') {
      //     data.instruments.map((instrument: Instrument) => {
      //       observer.next(instrument);
      //     });
      //   }
      // })      

      return () => {
        //do unsub here
      };
    }); 
  }
};
