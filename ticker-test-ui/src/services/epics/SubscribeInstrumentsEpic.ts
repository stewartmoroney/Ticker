import { ofType } from 'redux-observable';
import { mergeMap, map} from 'rxjs/operators';

import { ApplicationEpic } from './Epics';
import { ActionTypes, newInstrument, INewSessionAction, IAppAction } from '../redux/actions';

export const subscribeInstrumentsEpic: ApplicationEpic = (action$, state$, { instrumentService }) => 
  action$.pipe(
    ofType<IAppAction, INewSessionAction>(ActionTypes.NEW_SESSION),
    mergeMap(action => {
      return instrumentService.subscribe().pipe(
        map(instrument => newInstrument(instrument))
      )      
    })
  );
