import { Observable } from 'rxjs';

import ITickAction from '../redux/TickAction';

export abstract class ISubscribeService {
  public abstract subscribe(sessionId: string): Observable<ITickAction>;
  public abstract unsubscribe(): Observable<ITickAction>;
}
