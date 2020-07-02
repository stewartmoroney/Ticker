import { Observer, Observable } from "rxjs";

import { IPriceSubscribeService } from './index';
import { PriceSubscribeRequestMessage, PriceSubscribeRequestMessageType, UnsubscribePriceRequestMessage, UnsubscribePriceRequestMessageType  } from "../messages";

export class PriceSubscribeService implements IPriceSubscribeService {    
  public sendSubscribeRequest = (webSocket: WebSocket, id: string): Observable<boolean> => {
    return Observable.create((observer: Observer<boolean>) => {
      console.log('Sub to Instrument prices');

      webSocket.addEventListener("message", function (evt: MessageEvent) {
        // const data = JSON.parse(evt.data);
        // console.log('mesage arrived - ' + data);
        //ack
        // if(data.type === 'InstrumentResponse') {
        //   data.instruments.map((instrument: Instrument) => {
        //     observer.next(instrument);
        //   });
        // }
      })      

      const req : PriceSubscribeRequestMessage = 
      {
          type: PriceSubscribeRequestMessageType,
          body: 
          {
              instrumentId: id
          }
      };

      webSocket.send(JSON.stringify(req));
      return () => {
        //do unsub here
      };
    }); 
  }

  public sendUnsubscribeRequest = (webSocket: WebSocket, id: string): Observable<boolean> => {
    return Observable.create((observer: Observer<boolean>) => {
      console.log('UnSub to Instrument prices');

      webSocket.addEventListener("message", function (evt: MessageEvent) {
        // const data = JSON.parse(evt.data);
        // console.log('mesage arrived - ' + data);
        // ack
        // if(data.type === 'InstrumentResponse') {
        //   data.instruments.map((instrument: Instrument) => {
        //     observer.next(instrument);
        //   });
        // }
      })      

      const req : UnsubscribePriceRequestMessage = 
      {
          type: UnsubscribePriceRequestMessageType,
          body: 
          {
              instrumentId: id
          }
      };

      webSocket.send(JSON.stringify(req));
      return () => {
        //do unsub here
      };
    }); 
  }
};
