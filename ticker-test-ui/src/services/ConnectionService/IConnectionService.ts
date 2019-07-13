import { Observable } from 'rxjs';

import * as Stomp from 'stompjs';

import ITickAction from '../redux/TickAction';

export abstract class IConnectionService {
  public abstract connect(): Observable<ITickAction>;
  public abstract client(): Stomp.Client;
}
