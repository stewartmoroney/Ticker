import { Observable, Observer } from "rxjs";

import { Instrument } from "./././../../state/types";
import { IInstrumentService } from "./index";

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

export class InstrumentServiceMock implements IInstrumentService {
  public subscribe = (webSocket: WebSocket): Observable<Instrument> =>
    Observable.create((observer: Observer<Instrument>) => {
      mockinstruments.forEach(mockinstrument => {
        observer.next(mockinstrument);
      });
      observer.complete();
      return;
    });
}
