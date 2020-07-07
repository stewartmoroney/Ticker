import { merge, Observable, of, throwError } from "rxjs";
import { filter, retryWhen, switchMap, switchMapTo } from "rxjs/operators";

import { ConnectionStatus } from "../state/types";
import getConnectionStatus$ from "./getConnectionStatus$";
import waitUntilConnected from "./waitUntilConnected";

const DISCONNECTED_ERROR = new Error("Got disconnected!");

const retryOnDisconnect = <T>(target$: Observable<T>): Observable<T> => {
  const disconnected$ = getConnectionStatus$().pipe(
    filter(x => x === ConnectionStatus.DISCONNECTED),
    switchMapTo(throwError(DISCONNECTED_ERROR))
  );

  return merge(target$, disconnected$).pipe(
    waitUntilConnected,
    retryWhen(err =>
      err.pipe(
        switchMap(err1 =>
          err1 === DISCONNECTED_ERROR ? of(err1) : throwError(err1)
        )
      )
    )
  );
};

export default retryOnDisconnect;
