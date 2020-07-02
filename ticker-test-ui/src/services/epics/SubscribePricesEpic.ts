import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";

import { ActionTypes, IAppAction, IConnectedAction } from "../redux/actions";
import { ApplicationEpic } from "./ApplicationEpic";

export const subscribePricesEpic: ApplicationEpic = (
  action$,
  state$,
  { priceService, webSocketService }
) =>
  action$.pipe(
    ofType<IAppAction, IConnectedAction>(ActionTypes.CONNECTED),
    mergeMap(action => priceService.subscribe(webSocketService.webSocket()))
  );
