import { Observer, Observable } from "rxjs";

import { IInstrumentService } from './index';

import { Instrument } from "./././../../state/types";

const mockinstruments: Instrument[] = [
  {
    id: '1',
  },
  {
    id: '2',
  }
];

export class InstrumentServiceMock implements IInstrumentService {
  public subscribe = (): Observable<Instrument> => {
    return Observable.create((observer: Observer<Instrument>) => {
      mockinstruments.forEach(mockinstrument => {
        observer.next(mockinstrument);
      });
      observer.complete();
      return;
    }); 
  }
};
