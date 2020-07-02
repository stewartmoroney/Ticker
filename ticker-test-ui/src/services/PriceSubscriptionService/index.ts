import { Observable } from "rxjs";

export interface IPriceSubscribeService {
  sendSubscribeRequest: (
    webSocket: WebSocket,
    instrumentId: string
  ) => Observable<boolean>;
  sendUnsubscribeRequest: (
    webSocket: WebSocket,
    instrumentId: string
  ) => Observable<boolean>;
}
