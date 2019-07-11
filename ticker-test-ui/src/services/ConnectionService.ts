import { SingleInstance } from 'eye-oh-see';
import { Observable, Observer } from 'rxjs';

import SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

import { BACKEND_URL } from '../Constants';

import { connected, newSession } from './redux/Actions';
import ITickAction from './redux/TickAction';

export abstract class ConnectionService {
  public abstract connect(): Observable<ITickAction>;
  public abstract client(): Stomp.Client;
}

@SingleInstance(ConnectionService)
export class ConnectionServiceImpl implements ConnectionService {
  private _client!: Stomp.Client;
  private userId!: string;
  private passsword!: string;

  public connect(): Observable<ITickAction> {
    return Observable.create((observer: Observer<ITickAction>) => {
      const socket = new SockJS(BACKEND_URL);
      this._client = Stomp.over(socket);
      this._client.connect(
        this.userId,
        this.passsword,
          () => {
          // (frame: Stomp.Frame) => {
          observer.next(connected());
          this._client.subscribe('/login/ack*', (e: Stomp.Message) => {
            // const sessionId = e.headers['message-id'].split('-')[0];
            const sessionId = '1';
            observer.next(newSession(sessionId));
          });
          this._client.send('/app/login', { priority: 9 }, '');
        },
        (e: {}) => {
          // error handler . handle stomp conect error
        }
      );
    });
  }

  public client() {
    return this._client;
  }
}
