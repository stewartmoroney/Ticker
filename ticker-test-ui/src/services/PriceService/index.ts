import { Observable } from "rxjs";

import { IAppAction } from "../redux/actions";

export type subscribePrices = (webSocket: WebSocket) => Observable<IAppAction>;
