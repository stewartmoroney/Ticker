import { ActionsObservable, combineEpics} from 'redux-observable';
import 'rxjs';

import { SUBSCRIBE} from '../redux/ActionTypes';

export const loggingEpic: any = (action$: ActionsObservable<any>) =>
  action$.filter((action: any) => true)
    .do((item: any) => console.log(item))
    .ignoreElements();

export const susbscribeEpic: any = (action$: ActionsObservable<any>) =>
  action$.filter((action: any) => action.type === SUBSCRIBE)
    // .mapTo()
    .do((item: any) => console.log('subscribing async'))
    .ignoreElements();

export const rootEpic = combineEpics(
  loggingEpic,
  susbscribeEpic
);
