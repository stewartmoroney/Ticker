import { ofType } from 'redux-observable';
import { mergeMap, map} from 'rxjs/operators';

import { ApplicationEpic } from './Epics';
import { ActionTypes, newInstrument } from '../redux/actions';

export const instrumentEpic: ApplicationEpic = (action$, state$, { instrumentService }) => 
  action$.pipe(
    ofType(ActionTypes.CONNECTED),
    mergeMap(action => {
      return instrumentService.subscribe().pipe(
        map(instrument => newInstrument(instrument))
      )      
    })
  );
