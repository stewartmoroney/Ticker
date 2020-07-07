import { Observable, Observer } from "rxjs";

import { instrumentSubscribe, subscribedInstruments } from ".";
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

export const sendInstrumentSubscriptionMock: instrumentSubscribe = () => {};

export const subscribedInstrumentsMock: subscribedInstruments = (): Observable<Instrument> =>
  Observable.create((observer: Observer<Instrument>) => {
    mockinstruments.forEach(mockinstrument => {
      observer.next(mockinstrument);
    });
    observer.complete();
    return;
  });
