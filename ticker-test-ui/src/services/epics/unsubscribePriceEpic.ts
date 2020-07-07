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
  { priceUnsubscribe }
) =>
  action$.pipe(
    ofType<IAppAction, IInstrumentUnsubscribeAction>(
      ActionTypes.UNSUBSCRIBE_INSTRUMENT
    ),
    mergeMap(action => {
      const { payload } = action;
      return priceUnsubscribe(payload).pipe(
        map(sucess => unsubscribeAck(payload))
      );
    })
  );
