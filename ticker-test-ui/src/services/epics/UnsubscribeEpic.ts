import { ActionsObservable } from 'redux-observable';
import { Action } from 'redux';
import 'rxjs';

import Services from '../../services/Services';
import { UNSUBSCRIBE } from '../redux/ActionTypes';
import TickAction from './../redux/TickAction';

export default (action$: ActionsObservable<TickAction>) =>
  action$.ofType(UNSUBSCRIBE)
    .do((action: TickAction) => {
      Services.subscribeService().unsubscribe(action.payload);
    })
    .ignoreElements();