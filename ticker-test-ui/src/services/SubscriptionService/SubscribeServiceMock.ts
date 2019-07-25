import { Observable, Observer } from 'rxjs';
import * as Stomp from 'stompjs';

import { IAppAction, subscribed, unsubscribed } from '../redux/actions';

import { IConnectionService } from '../ConnectionService';

import { ChannelName, defaultChannels, IChannel } from './Channels';
import { ISubscribeService } from './ISubscribeService';

import data from './MockData';
import tick from './MockTicks';

export class SubscribeServiceMock extends ISubscribeService {
  private connectionService: IConnectionService;

  private intervalIds: number[] = [];

  constructor(connectionService: IConnectionService) {
    super();
    this.connectionService = connectionService;
  }

  public subscribe(sessionId: string): Observable<IAppAction> {
    return Observable.create((observer: Observer<IAppAction>) => {
      defaultChannels.forEach((channel: IChannel) => {
        this.intervalIds.push(
          setInterval(() => {
            // const subscribeEndpoint = '/app/' + channel.name + '/subscribe';
            // const endpoint = '/' + channel.name + '-user' + sessionId;

            const msgData = this.getData(channel.name);
            channel.dataHandler(msgData, observer);
          }, 5000)
        );
      });

      observer.next(subscribed());
    });
  }

  public unsubscribe(): Observable<IAppAction> {
    return Observable.create((observer: Observer<IAppAction>) => {
      this.intervalIds.forEach(intervalId => {
        clearInterval(intervalId);        
      });
      observer.next(unsubscribed());
    });
  }

  private client(): Stomp.Client {
    return this.connectionService.client();
  }

  private getData(channel: ChannelName) {
    return channel === ChannelName.TICK ? tick() : data();
  }
}
