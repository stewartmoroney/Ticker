import { Observable } from "rxjs";

export interface IInstrumentPriceService {
  subscribeToPrices: (sessionId: string) => Observable<number>;
  sendSubscribeRequest: (instrumentId: string) => Observable<boolean>;
}
