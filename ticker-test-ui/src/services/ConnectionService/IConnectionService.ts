import { Observable } from 'rxjs';

import * as Stomp from 'stompjs';

import { IAppAction } from '../redux/actions';

export abstract class IConnectionService {
  public abstract connect(): Observable<IAppAction>;
  public abstract client(): Stomp.Client;
}
