import { ofType } from 'redux-observable';
import { mergeMap, map} from 'rxjs/operators';

import { ApplicationEpic } from './Epics';
import { ActionTypes, newInstrument, IAppAction, IConnectedAction } from '../redux/actions';

export const subscribeInstrumentsEpic: ApplicationEpic = (action$, state$, { webSocketService, instrumentService }) => 
  action$.pipe(
    ofType<IAppAction, IConnectedAction>(ActionTypes.CONNECTED),
    mergeMap(action => {
      return instrumentService.subscribe(webSocketService.webSocket()).pipe(
        map(instrument => newInstrument(instrument))
      )      
    })
  );
