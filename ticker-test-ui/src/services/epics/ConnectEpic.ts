import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';

import { CONNECT } from '../redux/actions/ActionTypes';
import { ApplicationEpic } from './Epics';

export const connectEpic: ApplicationEpic = (action$, state$, { connectionService }) =>
  action$.pipe(
    ofType(CONNECT),
    mergeMap(action => {
      return connectionService.connect();
    })
  );
