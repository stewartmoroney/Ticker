import { Observable, Observer } from 'rxjs';
import uuid from 'uuid';

import * as Stomp from 'stompjs';

import { connected, newSession } from '../redux/actions';
import { IAppAction}  from '../redux/actions';

import { IConnectionService } from './IConnectionService';

export class ConnectionServiceMock extends IConnectionService {
  private _client!: Stomp.Client;

  public connect(): Observable<IAppAction> {
    return Observable.create((observer: Observer<IAppAction>) => {
      setTimeout(() => {
        observer.next(connected());
      }, 200);

      setTimeout(() => {
        const sessionId = uuid();
        observer.next(newSession(sessionId));
      }, 200);
    });
  }

  public client() {
    return this._client;
  }
}
