import { ActionsObservable } from 'redux-observable';
import { mergeMap } from 'rxjs/operators/mergeMap';

import Services from '../../services/Services';
import { UNSUBSCRIBE } from '../redux/ActionTypes';
import TickAction from './../redux/TickAction';

export default (action$: ActionsObservable<TickAction>) =>
  action$.ofType(UNSUBSCRIBE).mergeMap((action: TickAction) => {
    return Services.subscribeService().unsubscribe();
  });
