import { ofType } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";

import {
  ActionTypes,
  IAppAction,
  IInstrumentUnsubscribeAction,
  unsubscribeAck
} from "../redux/actions";
import { ApplicationEpic } from "./ApplicationEpic";

export const unsubscribePriceEpic: ApplicationEpic = (
  action$,
  state$,
  { priceSubscribeService, webSocketService }
) =>
  action$.pipe(
    ofType<IAppAction, IInstrumentUnsubscribeAction>(
      ActionTypes.UNSUBSCRIBE_INSTRUMENT
    ),
    mergeMap(action => {
      const { payload } = action;
      return priceSubscribeService
        .sendUnsubscribeRequest(webSocketService.webSocket(), payload)
        .pipe(map(sucess => unsubscribeAck(payload)));
    })
  );
