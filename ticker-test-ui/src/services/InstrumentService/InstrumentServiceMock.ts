import { Observer, Observable } from "rxjs";

import { IInstrumentService } from './index';

import { Instrument } from "./././../../state/types";

const mockinstruments: Instrument[] = [
  {
    id: '1',
    name: "a",
  },
  {
    id: '2',
    name: "b",
  }
];

export class InstrumentServiceMock implements IInstrumentService {
  public subscribe = (webSocket: WebSocket): Observable<Instrument> => {
    return Observable.create((observer: Observer<Instrument>) => {
      mockinstruments.forEach(mockinstrument => {
        observer.next(mockinstrument);
      });
      observer.complete();
      return;
    }); 
  }
};
