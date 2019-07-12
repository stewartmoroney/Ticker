import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import Services from '../../services/Services';

import { UNSUBSCRIBE } from '../redux/ActionTypes';

import { ApplicationEpic } from './Epics';

export const unSubscribeEpic: ApplicationEpic = action$ =>
  action$.pipe(
    ofType(UNSUBSCRIBE),
    mergeMap(action => {
      return Services.subscribeService().unsubscribe();
    })
  );
