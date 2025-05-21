import { bind, shareLatest } from "@react-rxjs/core";
import { ReplaySubject } from "rxjs";
import { startWith } from "rxjs/operators";
import { webSocket } from "rxjs/webSocket";

import { WS_URL } from "../Constants";
import { ConnectionStatus } from "../state/types";

const connnectionStatus$ = new ReplaySubject<ConnectionStatus>();

export const getConnectionStatus$ = () =>
  connnectionStatus$.asObservable().pipe(shareLatest());

export const websocket = webSocket({
  url: WS_URL,
  openObserver: {
    next: () => {
      connnectionStatus$.next(ConnectionStatus.CONNECTED);
    }
  },
  closeObserver: {
    next: () => {
      connnectionStatus$.next(ConnectionStatus.DISCONNECTED);
    }
  }
});

export const [useConnectionState] = bind(
  getConnectionStatus$().pipe(
    startWith(ConnectionStatus.DISCONNECTED as ConnectionStatus)
  )
);
