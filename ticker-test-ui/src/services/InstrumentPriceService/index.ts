import { Observable } from "rxjs";

export interface IInstrumentPriceService {
    subscribe: (id: string) => Observable<number>;
}
