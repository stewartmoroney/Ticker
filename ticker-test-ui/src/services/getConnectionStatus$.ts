import { Observable, ReplaySubject } from "rxjs";

import { ConnectionStatus } from "../state/types";
import { getTransport } from "./getTransport";

let cachedConnectionStatus$: Observable<ConnectionStatus> | null = null;

const getConnectionStatus$ = (): Observable<ConnectionStatus> => {
  if (cachedConnectionStatus$) {
    return cachedConnectionStatus$;
  }
  const transport = getTransport();
  const connStatusSub: ReplaySubject<ConnectionStatus> = new ReplaySubject(1);
  connStatusSub.next(ConnectionStatus.DISCONNECTED);
  transport.onOpen((ev: Event) => {
    connStatusSub.next(ConnectionStatus.CONNECTED);
  });
  transport.onClose((ev: Event) => {
    connStatusSub.next(ConnectionStatus.DISCONNECTED);
  });

  return (cachedConnectionStatus$ = connStatusSub.asObservable());
};

export default getConnectionStatus$;
