import * as Stomp from 'stompjs';
import { SingleInstance } from 'eye-oh-see';
import { Store } from 'redux';
import { Observable, Observer } from 'rxjs';

import { connected, subscribed, unsubscribed, newSession } from './redux/Actions';
import Services from './Services';
import TickAction from './redux/TickAction';

import { Channel, defaultChannels } from './Channels';

export abstract class SubscribeService {
  abstract subscribe(): Observable<TickAction>;
  abstract unsubscribe(): Observable<TickAction>;
}

@SingleInstance(SubscribeService)
export class SubscribeServiceImpl implements SubscribeService {

  private _client: Stomp.Client;
  private sessionId: string;

  public subscribe(): Observable<TickAction> {
    return Observable.create((observer: Observer<TickAction>) => {
      if (this._client && this._client.connected && this.sessionId) {
        this.doSubscribe(this.sessionId, observer);
      } 

      this._client = this.connectedClient((e: Stomp.Message) => {
        observer.next(connected());
        this.doLogon(observer, () => 
          this.doSubscribe(this.sessionId, observer)
        );
      });      
    });
  }

  public unsubscribe(): Observable<TickAction> {
    return Observable.create((observer: Observer<TickAction>) => {
      defaultChannels.forEach((channel: Channel) => this._client.send('/app/' + channel.name + '/unsubscribe', {priority: 9}));
      observer.next(unsubscribed());
    });
  }  

  private connectedClient(callback: Function) {
    if (this._client) {
      return this._client;
    } else {
      return Services.connectionService().client(callback);
    }
  }

  private doLogon(observer: Observer<TickAction>, logonCallback: Function) {
    this._client.subscribe('/login/ack*', (e: Stomp.Message) => {
      this.sessionId = e.headers['message-id'].split('-')[0];
      observer.next(newSession(this.sessionId));
      logonCallback();
    });
    this._client.send('/app/login', {priority: 9}, '');        
  }
  
  private doSubscribe(sessionId: string, observer: Observer<TickAction>) {
    defaultChannels.forEach((channel: Channel) => {
      this.clientSubscribe(sessionId, observer, channel);
    });

    observer.next(subscribed());
  }

  private clientSubscribe(sessionId: string, observer: Observer<TickAction>, channel: Channel) {  
    const subscribeEndpoint = '/app/' + channel.name + '/subscribe';
    this._client.subscribe('/' + channel.name + '-user' + sessionId, (data: Stomp.Message) => channel.dataHandler(data.body, observer));    
    this._client.send(subscribeEndpoint, {priority: 9});      
  }
}