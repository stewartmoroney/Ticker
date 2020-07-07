import { Observable } from "rxjs";
import { filter, switchMapTo, take } from "rxjs/operators";

import { ConnectionStatus } from "../state/types";
import getConnectionStatus$ from "./getConnectionStatus$";

const waitUntilConnected = <T>(target$: Observable<T>): Observable<T> =>
  getConnectionStatus$().pipe(
    filter(x => x === ConnectionStatus.CONNECTED),
    take(1),
    switchMapTo(target$)
  );

export default waitUntilConnected;
