import { Observable, Observer } from 'rxjs';

import SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

import { BACKEND_URL } from '../../Constants';

import { connected, newSession } from '../redux/Actions';
import { IAppAction}  from '../redux/Actions';

import logger from '../../util/logger';
import { IConnectionService } from './IConnectionService';

export class ConnectionServiceImpl extends IConnectionService {
  private _client!: Stomp.Client;
  private userId: string = 'aUser';
  private passsword: string = 'pass';

  public connect(): Observable<IAppAction> {
    return Observable.create((observer: Observer<IAppAction>) => {
      const socket = new SockJS(BACKEND_URL);
      this._client = Stomp.over(socket);
      this._client.connect(
        this.userId,
        this.passsword,
          () => {
          observer.next(connected());
          this._client.subscribe('/login/ack*', (e: Stomp.Message) => {
            // @ts-ignore
            const sessionId = e.headers['message-id'].split('-')[0];
            observer.next(newSession(sessionId));
          });
          this._client.send('/app/login', { priority: 9 }, '');
        },
        e => {
          logger.info(e.toString());
        }
      );
    });
  }

  public client() {
    return this._client;
  }
}
