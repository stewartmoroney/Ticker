import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { UNSUBSCRIBE } from '../redux/ActionTypes';

import { ApplicationEpic } from './Epics';

export const unSubscribeEpic: ApplicationEpic = (action$, state$, { subscribeService })  =>
  action$.pipe(
    ofType(UNSUBSCRIBE),
    mergeMap(action => {
      return subscribeService.unsubscribe();
    })
  );
