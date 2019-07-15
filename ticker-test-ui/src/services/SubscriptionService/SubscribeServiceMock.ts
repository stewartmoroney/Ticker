import { Observable, Observer } from 'rxjs';
import * as Stomp from 'stompjs';

import { subscribed, unsubscribed } from '../redux/Actions';
import { IAppAction } from '../redux/Actions';

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

  public subscribe(sessionId: string): Observable<IAppAction> {
    return Observable.create((observer: Observer<IAppAction>) => {
      defaultChannels.forEach((channel: IChannel) => {
        setInterval(() => {
          // const subscribeEndpoint = '/app/' + channel.name + '/subscribe';
          // const endpoint = '/' + channel.name + '-user' + sessionId;

          const msgData = channel.name === ChannelName.TICK ? tick() : data();
          channel.dataHandler(msgData, observer);
        }, 5000);
      });

      observer.next(subscribed());
    });
  }

  public unsubscribe(): Observable<IAppAction> {
    return Observable.create((observer: Observer<IAppAction>) => {
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
