import { Observable, Observer } from 'rxjs';
import * as Stomp from 'stompjs';

import { subscribed, unsubscribed } from '../redux/Actions';
import ITickAction from '../redux/TickAction';

import { IConnectionService } from '../ConnectionService';

import { ChannelName, defaultChannels, IChannel } from './Channels';
import { ISubscribeService } from './ISubscribeService';

import data from './MockData';
import tick from './MockTicks';

export class SubscribeServiceMock extends ISubscribeService {
  private connectionService: IConnectionService;

  constructor(connectionService: IConnectionService) {
    super();
    this.connectionService = connectionService;
  }

  public subscribe(sessionId: string): Observable<ITickAction> {
    return Observable.create((observer: Observer<ITickAction>) => {
      defaultChannels.forEach((channel: IChannel) => {
        setInterval(() => {
          const subscribeEndpoint = '/app/' + channel.name + '/subscribe';
          const endpoint = '/' + channel.name + '-user' + sessionId;

          const msgData = channel.name === ChannelName.TICK ? tick() : data();
          channel.dataHandler(msgData, observer);
        }, 5000);
      });

      observer.next(subscribed());
    });
  }

  public unsubscribe(): Observable<ITickAction> {
    return Observable.create((observer: Observer<ITickAction>) => {
      defaultChannels.forEach((channel: IChannel) => {
        this.client().send('/app/' + channel.name + '/unsubscribe', {
          priority: 9
        });
      });
      observer.next(unsubscribed());
    });
  }

  private client(): Stomp.Client {
    return this.connectionService.client();
  }
}
