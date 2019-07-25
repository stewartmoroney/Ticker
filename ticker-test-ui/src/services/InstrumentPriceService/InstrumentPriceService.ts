import { Observer, Observable } from "rxjs";

import { IInstrumentPriceService } from './index';

export class InstrumentPriceService implements IInstrumentPriceService {
  public subscribeToPrices = (id: string): Observable<number> => {
    return Observable.create((observer: Observer<number>) => {
      observer.next(1234);
      observer.complete();
      return () => {
        //do unsub here
      };
    }); 
  }
    
  public sendSubscribeRequest = (id: string): Observable<boolean> => {
    return Observable.create((observer: Observer<boolean>) => {
      observer.next(true);
      observer.complete();
      return () => {
        //do unsub here
      };
    }); 
  }
};
