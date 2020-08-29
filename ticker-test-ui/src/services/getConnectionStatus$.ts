import { ReplaySubject } from "rxjs";
import { shareReplay } from "rxjs/operators";

import { ConnectionStatus } from "../state/types";
import { getTransport } from "./getTransport";

const conStatus$ = new ReplaySubject<ConnectionStatus>();

const transport = getTransport();
transport.onOpen((ev: Event) => {
  conStatus$.next(ConnectionStatus.CONNECTED);
});
transport.onClose((ev: Event) => {
  conStatus$.next(ConnectionStatus.DISCONNECTED);
});

const getConnectionStatus$ = () =>
  conStatus$.asObservable().pipe(shareReplay(1));

export default getConnectionStatus$;
