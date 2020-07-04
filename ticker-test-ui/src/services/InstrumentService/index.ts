import { Observable } from "rxjs";

import { Instrument } from "./././../../state/types";

export type instrumentSubscribe = (
  webSocket: WebSocket
) => Observable<Instrument>;
