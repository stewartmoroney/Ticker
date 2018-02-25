import * as Stomp from 'stompjs';
import { SingleInstance, Factory } from 'eye-oh-see';
import { Store } from 'redux';
import { Observable, Observer } from 'rxjs';

import { subscribed, unsubscribed } from './redux/Actions';
import { ConnectionService } from './ConnectionService';
import Services from './Services';
import TickAction from './redux/TickAction';

import { Channel, defaultChannels } from './Channels';

export abstract class SubscribeService {
  abstract subscribe(sessionId: string): Observable<TickAction>;
  abstract unsubscribe(): Observable<TickAction>;
}

@SingleInstance(SubscribeService)
export class SubscribeServiceImpl implements SubscribeService {

  private connectionService: ConnectionService;

  constructor(@Factory(ConnectionService) private connectionServiceFactory: () => ConnectionService) { 
    this.connectionService = this.connectionServiceFactory();
  }

  public subscribe(sessionId: string): Observable<TickAction> {
    return Observable.create((observer: Observer<TickAction>) => {
        return this.doSubscribe(sessionId, observer);
    });
  }

  public unsubscribe(): Observable<TickAction> {
    return Observable.create((observer: Observer<TickAction>) => {
      defaultChannels.forEach((channel: Channel) => {
        this.client().send('/app/' + channel.name + '/unsubscribe', {priority: 9});
      });
      observer.next(unsubscribed());
    });
  }  
  
  private client(): Stomp.Client {
    return this.connectionService.client();
  }

  private doSubscribe(sessionId: string, observer: Observer<TickAction>) {
    defaultChannels.forEach((channel: Channel) => {
      this.clientSubscribe(sessionId, observer, channel);
    });

    observer.next(subscribed());
  }

  private clientSubscribe(sessionId: string, observer: Observer<TickAction>, channel: Channel) {  
    const subscribeEndpoint = '/app/' + channel.name + '/subscribe';
    const endpoint = '/' + channel.name + '-user' + sessionId;

    this.client().subscribe(endpoint, (data: Stomp.Message) => channel.dataHandler(data.body, observer));    
    this.client().send(subscribeEndpoint, {priority: 9});      
  }
}