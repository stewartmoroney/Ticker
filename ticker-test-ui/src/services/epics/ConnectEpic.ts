import { ActionsObservable } from 'redux-observable';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { Store } from 'redux';

import TickerAppState from './../../state/TickerAppState';

import Services from './../../services/Services';
import { CONNECT } from './../redux/ActionTypes';
import TickAction from './../redux/TickAction';

export default (action$: ActionsObservable<TickAction>, store: Store<TickerAppState>) =>
  action$.ofType(CONNECT)
    .mergeMap((action: TickAction) => {
      return Services.connectionService().connectClient();
    });