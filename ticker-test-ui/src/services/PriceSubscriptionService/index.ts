import { Observable } from "rxjs";

export type priceSubscribe = (instrumentId: string) => Observable<boolean>;

export type priceUnsubscribe = (instrumentId: string) => Observable<boolean>;
