import { ofType } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";

import {
  ActionTypes,
  IAppAction,
  IInstrumentSubscribeAction,
  subscribeAck
} from "../redux/actions";
import { ApplicationEpic } from "./ApplicationEpic";

export const subscribePriceEpic: ApplicationEpic = (
  action$,
  state$,
  { priceSubscribe, webSocketService }
) =>
  action$.pipe(
    ofType<IAppAction, IInstrumentSubscribeAction>(
      ActionTypes.SUBSCRIBE_INSTRUMENT
    ),
    mergeMap(action => {
      const { payload } = action;
      return priceSubscribe(webSocketService.webSocket(), payload).pipe(
        map(sucess => subscribeAck(payload))
      );
    })
  );
