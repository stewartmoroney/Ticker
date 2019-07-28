import { ofType } from 'redux-observable';
import { mergeMap, map} from 'rxjs/operators';

import { ApplicationEpic } from './Epics';
import { ActionTypes, newInstrument, IAppAction, ISubscribedAction } from '../redux/actions';

export const subscribeInstrumentsEpic: ApplicationEpic = (action$, state$, { instrumentService }) => 
  action$.pipe(
    ofType<IAppAction, ISubscribedAction>(ActionTypes.SUBSCRIBED),
    mergeMap(action => {
      return instrumentService.subscribe().pipe(
        map(instrument => newInstrument(instrument))
      )      
    })
  );
