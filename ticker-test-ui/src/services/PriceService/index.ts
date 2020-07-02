import { Observable } from "rxjs";

import { IAppAction } from "../redux/actions";

export interface IPriceService {
  subscribe: (webSocket: WebSocket) => Observable<IAppAction>;
}
