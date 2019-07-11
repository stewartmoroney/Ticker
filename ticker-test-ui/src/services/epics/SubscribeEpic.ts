import { Observable } from 'rxjs'
import { ofType, StateObservable } from 'redux-observable';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import { Action } from 'redux';

import Services from './../../services/Services';
import { SUBSCRIBE } from './../redux/ActionTypes';
import TickerAppState from '../../state/TickerAppState';
import { ApplicationEpic } from './Epics';

export const subscribeEpic: ApplicationEpic = (action$: Observable<Action>, state$: StateObservable<TickerAppState>) =>
  action$.pipe(
    ofType(SUBSCRIBE),
    mergeMap((action, state) => {
      return Services.subscribeService().subscribe(
        state$.value.sessionId
      );
    })
  )
