import * as Stomp from 'stompjs';
import { Container, SingleInstance } from 'eye-oh-see';
import { logon, status, newTick, session, dataUpdate } from './redux/Actions';

import Services from './Services';
import Store from '../services/redux/Store';

export abstract class SubscribeService {
  abstract subscribe(userName: string): void;
  abstract unsubscribe(userName: string): void;
}

@SingleInstance(SubscribeService)
export class SubscribeServiceImpl implements SubscribeService {

  private _client: Stomp.Client;
  private sessionId: string;
  private reduxStore: any;

  constructor() {
    this.reduxStore = Store;
    this.handleLoggedIn = this.handleLoggedIn.bind(this);
    this.handleTick = this.handleTick.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  public subscribe(userName: string) {
    if (this._client && this._client.connected && this.sessionId) {
      this.doSubscribe(userName);
    } else if (this._client && this._client.connected) {
      this.doLogon(userName);
    } else {
      this._client = this.connectedClient((e: Stomp.Message) => {
        this.reduxStore.dispatch(status('Connected'));
        this.doLogon(userName);
      });      
    }
  }

  public unsubscribe(userName: string) {
      this.reduxStore.dispatch(status('unsubscribing'));
      this._client.send('/app/tick/unsubscribe', {priority: 9});
  }  

  private connectedClient(callback: Function) {
    if (this._client) {
      return this._client;
    } else {
      return Services.connectionService().client(callback);
    }
  }

  private doLogon(userName: string) {
    this._client.subscribe('/login/ack*', this.handleLoggedIn);
    this._client.send('/app/login', {priority: 9}, userName);        
  }

  private doSubscribe(sessionId: string) {
    this._client.subscribe('/tick-user' + sessionId, this.handleTick);    
    this._client.subscribe('/data-user' + sessionId, this.handleData);
    this._client.send('/app/tick/subscribe', {priority: 9});
    this._client.send('/app/data/subscribe', {priority: 9});
    this.reduxStore.dispatch(status('listening for ticks'));    
  }

  private handleLoggedIn(e: Stomp.Message) {
      this.sessionId = e.headers['message-id'].split('-')[0];
      this.reduxStore.dispatch(session(this.sessionId));
      this.reduxStore.dispatch(status('logged on'));
      this.doSubscribe(this.sessionId);
  }
  
  private handleTick(tick: Stomp.Message) {
    this.reduxStore.dispatch(newTick(tick.body));
  }

  private handleData(data: Stomp.Message) {
    this.reduxStore.dispatch(dataUpdate(data.body));
  }
}