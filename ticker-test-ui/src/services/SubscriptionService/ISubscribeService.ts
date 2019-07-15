import { Observable } from 'rxjs';

import { IAppAction } from '../redux/Actions';

export abstract class ISubscribeService {
  public abstract subscribe(sessionId: string): Observable<IAppAction>;
  public abstract unsubscribe(): Observable<IAppAction>;
}
