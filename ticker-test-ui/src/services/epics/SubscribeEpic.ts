import { ActionsObservable } from 'redux-observable';
import { Action } from 'redux';
import 'rxjs';

import Services from '../../services/Services';
import { SUBSCRIBE } from '../redux/ActionTypes';
import TickAction from './../redux/TickAction';

export default (action$: ActionsObservable<TickAction>) =>
  action$.ofType(SUBSCRIBE)
    .do((action: TickAction) => {
      Services.subscribeService().subscribe(action.payload);
    })
    .ignoreElements();