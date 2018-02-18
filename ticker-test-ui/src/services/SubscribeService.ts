import * as Stomp from 'stompjs';
import { Container, SingleInstance } from 'eye-oh-see';
import { Store } from 'redux';
import { Observable, Observer } from 'rxjs';

import { status, newTick, session, dataUpdate } from './redux/Actions';
import Services from './Services';
import TickAction from './redux/TickAction';

export abstract class SubscribeService {
  abstract subscribe(userName: string): Observable<TickAction>;
  abstract unsubscribe(userName: string): Observable<TickAction>;
}

@SingleInstance(SubscribeService)
export class SubscribeServiceImpl implements SubscribeService {

  private _client: Stomp.Client;
  private sessionId: string;

  public subscribe(userName: string): Observable<TickAction> {
    return Observable.create((observer: Observer<TickAction>) => {
      if (this._client && this._client.connected && this.sessionId) {
        this.doSubscribe(userName, observer);
      } else if (this._client && this._client.connected) {
        this.doLogon(userName, observer);
      } else {
        this._client = this.connectedClient((e: Stomp.Message) => {
          observer.next(status('Connected'));
          this.doLogon(userName, observer);
        });      
      }
    });
  }

  public unsubscribe(userName: string): Observable<TickAction> {
    return Observable.create((observer: Observer<TickAction>) => {
      observer.next(status('unsubscribing'));
      this._client.send('/app/tick/unsubscribe', {priority: 9});
      this._client.send('/app/data/unsubscribe', {priority: 9});
      observer.next(status('unsubscribed'));
    });
  }  

  private connectedClient(callback: Function) {
    if (this._client) {
      return this._client;
    } else {
      return Services.connectionService().client(callback);
    }
  }

  private doLogon(userName: string, observer: Observer<TickAction>) {
    this._client.subscribe('/login/ack*', (e: Stomp.Message) => {
      this.sessionId = e.headers['message-id'].split('-')[0];
      observer.next(session(this.sessionId));
      observer.next(status('logged on'));
      this.doSubscribe(this.sessionId, observer);
    });
    this._client.send('/app/login', {priority: 9}, userName);        
  }
  
  private doSubscribe(sessionId: string, observer: Observer<TickAction>) {
    this._client.subscribe('/tick-user' + sessionId, (tick: Stomp.Message) => observer.next(newTick(tick.body)));    
    this._client.subscribe('/data-user' + sessionId, (data: Stomp.Message) => observer.next(dataUpdate(data.body)));
    this._client.send('/app/tick/subscribe', {priority: 9});
    this._client.send('/app/data/subscribe', {priority: 9});
    observer.next(status('listening for ticks'));    
  }
}