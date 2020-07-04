import { Observable, Observer } from "rxjs";

import { instrumentSubscribe } from ".";
import { Instrument } from "./././../../state/types";

const mockinstruments: Instrument[] = [
  {
    id: "1",
    name: "a"
  },
  {
    id: "2",
    name: "b"
  }
];

export const subscribe: instrumentSubscribe = (
  webSocket: WebSocket
): Observable<Instrument> =>
  Observable.create((observer: Observer<Instrument>) => {
    mockinstruments.forEach(mockinstrument => {
      observer.next(mockinstrument);
    });
    observer.complete();
    return;
  });

export default subscribe;
