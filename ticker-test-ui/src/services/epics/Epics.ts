import { ActionsObservable, combineEpics } from 'redux-observable';
import 'rxjs';

import Services from '../../services/Services';
import { SUBSCRIBE, UNSUBSCRIBE } from '../redux/ActionTypes';

export const loggingEpic: any = (action$: ActionsObservable<any>) =>
  action$.filter((action: any) => true)
    .do((item: any) => console.log(item))
    .ignoreElements();

export const susbscribeEpic: any = (action$: ActionsObservable<any>) =>
  action$.filter((action: any) => action.type === SUBSCRIBE)
    .do((action: any) => {
      Services.subscribeService().subscribe(action.payload);
    })
    .ignoreElements();

export const unsusbscribeEpic: any = (action$: ActionsObservable<any>) =>
  action$.filter((action: any) => action.type === UNSUBSCRIBE)
    .do((action: any) => {
      Services.subscribeService().unsubscribe(action.payload);
    })
    .ignoreElements();

export const rootEpic = combineEpics(
  loggingEpic,
  susbscribeEpic,
  unsusbscribeEpic
);
