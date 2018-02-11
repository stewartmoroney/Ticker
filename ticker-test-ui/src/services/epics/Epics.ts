import { ActionsObservable, combineEpics} from 'redux-observable';
import 'rxjs';

export const loggingEpic: any = (action$: ActionsObservable<any>) =>
  action$.filter((action: any) => true)
    .do((item: any) => console.log(item))
    .ignoreElements();

export const rootEpic = combineEpics(
  loggingEpic
);
