import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';

import { ActionTypes } from '../redux/actions';
import { ApplicationEpic } from './Epics';

export const connectEpic: ApplicationEpic = (action$, state$, { connectionService }) =>
  action$.pipe(
    ofType(ActionTypes.CONNECT),
    mergeMap(action => {
      return connectionService.connect();
    })
  );
