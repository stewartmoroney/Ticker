import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { mergeMap, withLatestFrom } from 'rxjs/operators';

import Services from './../../services/Services';

import { SUBSCRIBE } from './../redux/ActionTypes';

import ITickerAppState from '../../state/TickerAppState';

import { ApplicationEpic } from './Epics';

export const subscribeEpic: ApplicationEpic = (
    action$: ActionsObservable<Action>,
    state$: StateObservable<ITickerAppState>
  ) =>
  action$.pipe(
    ofType(SUBSCRIBE),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const { sessionId } = state;
      return Services.subscribeService().subscribe(sessionId);
    })
  );
