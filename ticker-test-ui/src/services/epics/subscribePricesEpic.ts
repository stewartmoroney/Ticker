import { ofType } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";

import {
  ActionTypes,
  IAppAction,
  IConnectedAction,
  newPrice
} from "../redux/actions";
import { ApplicationEpic } from "./ApplicationEpic";

export const subscribePricesEpic: ApplicationEpic = (
  action$,
  state$,
  { subscribedPrices }
) =>
  action$.pipe(
    ofType<IAppAction, IConnectedAction>(ActionTypes.CONNECTED),
    mergeMap(action => subscribedPrices().pipe(map(price => newPrice(price))))
  );
