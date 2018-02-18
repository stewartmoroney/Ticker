import { SingleInstance } from 'eye-oh-see';
import { Observable, Observer } from 'rxjs';

import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

import { BACKEND_URL } from '../Constants';

import { connected, newSession } from './redux/Actions';
import TickAction from './redux/TickAction';

export abstract class ConnectionService {
  abstract client(onConnected: Function): Stomp.Client; 
}

@SingleInstance(ConnectionService)
export class ConnectionServiceImpl implements ConnectionService {

  private _client: Stomp.Client;
  private userId: string;
  private passsword: string;

  public client(onConnected: Function) {
    if (this._client) {
      return this._client;
    } else {
      this._client = this.connectedClient(onConnected);
      return this._client;
    }
  }

  private connectedClient(callback: Function) {
    var socket = new SockJS(BACKEND_URL) ;
    this._client = Stomp.over(socket);
    this._client.connect(
      this.userId, 
      this.passsword,
      (frame: Stomp.Frame) => {
        callback();
      },
      (e: {}) => {
        // error handler . handle stomp conect error
      });
    return this._client;
  }
}