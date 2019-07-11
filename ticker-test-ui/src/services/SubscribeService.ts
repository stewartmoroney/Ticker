import { Factory, SingleInstance } from 'eye-oh-see';
import { Store } from 'redux';
import { Observable, Observer } from 'rxjs';
import * as Stomp from 'stompjs';

import { subscribed, unsubscribed } from './redux/Actions';
import ITickAction from './redux/TickAction';

import { ConnectionService } from './ConnectionService';
import Services from './Services';

import { defaultChannels, IChannel } from './Channels';

export abstract class SubscribeService {
  public abstract subscribe(sessionId: string): Observable<ITickAction>;
  public abstract unsubscribe(): Observable<ITickAction>;
}

@SingleInstance(SubscribeService)
export class SubscribeServiceImpl implements SubscribeService {
  private connectionService: ConnectionService;

  constructor(
    @Factory(ConnectionService)
    private connectionServiceFactory: () => ConnectionService
  ) {
    this.connectionService = this.connectionServiceFactory();
  }

  public subscribe(sessionId: string): Observable<ITickAction> {
    return Observable.create((observer: Observer<ITickAction>) => {
      return this.doSubscribe(sessionId, observer);
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

  private doSubscribe(sessionId: string, observer: Observer<ITickAction>) {
    defaultChannels.forEach((channel: IChannel) => {
      this.clientSubscribe(sessionId, observer, channel);
    });

    observer.next(subscribed());
  }

  private clientSubscribe(
    sessionId: string,
    observer: Observer<ITickAction>,
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
