import { ofType } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";

import {
  ack,
  ActionTypes,
  IAppAction,
  IInstrumentSubscribeAction
} from "../redux/actions";
import { ApplicationEpic } from "./ApplicationEpic";

export const subscribePriceEpic: ApplicationEpic = (
  action$,
  state$,
  { priceSubscribeService, webSocketService }
) =>
  action$.pipe(
    ofType<IAppAction, IInstrumentSubscribeAction>(
      ActionTypes.SUBSCRIBE_INSTRUMENT
    ),
    mergeMap(action => {
      const { payload } = action;
      return priceSubscribeService
        .sendSubscribeRequest(webSocketService.webSocket(), payload)
        .pipe(map(sucess => ack()));
    })
  );
