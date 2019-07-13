import { Observable, Observer } from 'rxjs';
import uuid from 'uuid';

import * as Stomp from 'stompjs';

import { connected, newSession } from '../redux/Actions';
import ITickAction from '../redux/TickAction';

import { IConnectionService } from './IConnectionService';

export class ConnectionServiceMock extends IConnectionService {
  private _client!: Stomp.Client;

  public connect(): Observable<ITickAction> {
    return Observable.create((observer: Observer<ITickAction>) => {
      setTimeout(() => {
        observer.next(connected());
      }, 1000);

      setTimeout(() => {
        const sessionId = uuid();
        observer.next(newSession(sessionId));
      }, 1000);
    });
  }

  public client() {
    return this._client;
  }
}
