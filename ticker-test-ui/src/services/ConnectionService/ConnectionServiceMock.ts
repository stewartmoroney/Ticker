import { Observable, Observer } from 'rxjs';
import uuid from 'uuid';

import * as Stomp from 'stompjs';

import { connected, newSession } from '../redux/Actions';
import { IAppAction}  from '../redux/Actions';

import { IConnectionService } from './IConnectionService';

export class ConnectionServiceMock extends IConnectionService {
  private _client!: Stomp.Client;

  public connect(): Observable<IAppAction> {
    return Observable.create((observer: Observer<IAppAction>) => {
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
