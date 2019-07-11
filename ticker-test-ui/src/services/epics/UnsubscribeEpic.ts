import { Observable } from 'rxjs'
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { Action } from 'redux';

import Services from '../../services/Services';
import { UNSUBSCRIBE } from '../redux/ActionTypes';
import { ApplicationEpic } from './Epics';

export const unSubscribeEpic: ApplicationEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(UNSUBSCRIBE),
    mergeMap((action) => {
      return Services.subscribeService().unsubscribe();
    })
  );
