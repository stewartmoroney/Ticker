import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { mergeMap, withLatestFrom } from 'rxjs/operators';

import Services from './../../services/Services';

import { SUBSCRIBE } from './../redux/ActionTypes';

import { ApplicationEpic } from './Epics';

import ITickerAppState from '../../state/TickerAppState';

export const subscribeEpic: ApplicationEpic = (action$, state$) =>
  action$.pipe(
    ofType(SUBSCRIBE),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const { sessionId } = state.app;
      return Services.subscribeService().subscribe(sessionId);
    })
  );
