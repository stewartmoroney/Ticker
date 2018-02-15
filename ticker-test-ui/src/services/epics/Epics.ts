import { ActionsObservable, combineEpics } from 'redux-observable';
import { Action } from 'redux';
import 'rxjs';

import Services from '../../services/Services';
import { SUBSCRIBE, UNSUBSCRIBE } from '../redux/ActionTypes';

export const susbscribeEpic: any = (action$: ActionsObservable<Action>) =>
  action$.ofType(SUBSCRIBE)
    .do((action: any) => {
      Services.subscribeService().subscribe(action.payload);
    })
    .ignoreElements();

export const unsusbscribeEpic: any = (action$: ActionsObservable<any>) =>
  action$.ofType(UNSUBSCRIBE)
    .do((action: any) => {
      Services.subscribeService().unsubscribe(action.payload);
    })
    .ignoreElements();

export const rootEpic = combineEpics(
  susbscribeEpic,
  unsusbscribeEpic
);
