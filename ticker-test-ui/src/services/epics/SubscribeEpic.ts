import { Action } from 'redux';
import { ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { mergeMap, withLatestFrom } from 'rxjs/operators';

import Services from './../../services/Services';

import { SUBSCRIBE } from './../redux/ActionTypes';

import ITickerAppState from '../../state/TickerAppState';

import { ApplicationEpic } from './Epics';

export const subscribeEpic: ApplicationEpic = (action$: Observable<Action>, state$: StateObservable<ITickerAppState>) =>
  action$.pipe(
    ofType(SUBSCRIBE),
    mergeMap((action, state) => {
      return Services.subscribeService().subscribe(
        state$.value.sessionId
      );
    })
  );
