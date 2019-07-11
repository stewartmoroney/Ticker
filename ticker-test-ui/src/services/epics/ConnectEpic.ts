import { Observable } from 'rxjs'
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { Action } from 'redux';

import Services from './../../services/Services';
import { CONNECT } from './../redux/ActionTypes';
import { ApplicationEpic } from './Epics';

export const connectEpic: ApplicationEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(CONNECT),
    mergeMap((action) => {
      return Services.connectionService().connect();
    })
  );
