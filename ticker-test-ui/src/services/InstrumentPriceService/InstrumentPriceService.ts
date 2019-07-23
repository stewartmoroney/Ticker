import { Observer, Observable } from "rxjs";

import { IInstrumentPriceService } from './index';

export class InstrumentPriceService implements IInstrumentPriceService {
  public subscribe = (id: string): Observable<number> => {
    return Observable.create((observer: Observer<number>) => {
      observer.next(1234);
      observer.complete();
      return () => {
        const x = '';
      };
    }); 
  }
};
