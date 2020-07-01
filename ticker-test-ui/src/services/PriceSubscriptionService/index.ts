import { Observable } from "rxjs";
import { IAppAction } from "../redux/actions";

export interface IPriceSubscribeService {
  sendSubscribeRequest: (webSocket: WebSocket, instrumentId: string) => Observable<boolean>;
  sendUnsubscribeRequest: (webSocket: WebSocket, instrumentId: string) => Observable<boolean>;
}
