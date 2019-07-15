import { Observable, Observer } from 'rxjs';
import * as Stomp from 'stompjs';

import { subscribed, unsubscribed } from '../redux/Actions';
import { IAppAction } from '../redux/Actions';

import { IConnectionService } from '../ConnectionService';

import { defaultChannels, IChannel } from './Channels';
import { ISubscribeService } from './ISubscribeService';

export class SubscribeServiceImpl extends ISubscribeService {
  private connectionService: IConnectionService;

  constructor(connectionService: IConnectionService) {
    super();
    this.connectionService = connectionService;
  }

  public subscribe(sessionId: string): Observable<IAppAction> {
    return Observable.create((observer: Observer<IAppAction>) => {
      return this.doSubscribe(sessionId, observer);
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

  private doSubscribe(sessionId: string, observer: Observer<IAppAction>) {
    defaultChannels.forEach((channel: IChannel) => {
      this.clientSubscribe(sessionId, observer, channel);
    });

    observer.next(subscribed());
  }

  private clientSubscribe(
    sessionId: string,
    observer: Observer<IAppAction>,
    channel: IChannel
  ) {
    const subscribeEndpoint = '/app/' + channel.name + '/subscribe';
    const endpoint = '/' + channel.name + '-user' + sessionId;

    this.client().subscribe(endpoint, (data: Stomp.Message) =>
      channel.dataHandler(data.body, observer)
    );
    this.client().send(subscribeEndpoint, { priority: 9 });
  }
}
