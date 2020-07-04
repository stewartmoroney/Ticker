import { Observable } from "rxjs";

export type priceSubscribe = (
  webSocket: WebSocket,
  instrumentId: string
) => Observable<boolean>;

export type priceUnsubscribe = (
  webSocket: WebSocket,
  instrumentId: string
) => Observable<boolean>;
