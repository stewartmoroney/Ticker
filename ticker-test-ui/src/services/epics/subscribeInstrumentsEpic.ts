import { ofType } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";

import {
  ActionTypes,
  IAppAction,
  IConnectedAction,
  newInstrument
} from "../redux/actions";
import { ApplicationEpic } from "./ApplicationEpic";

export const subscribeInstrumentsEpic: ApplicationEpic = (
  action$,
  state$,
  { webSocketService, instrumentSubscribe }
) =>
  action$.pipe(
    ofType<IAppAction, IConnectedAction>(ActionTypes.CONNECTED),
    mergeMap(action =>
      instrumentSubscribe(webSocketService.webSocket()).pipe(
        map(instrument => newInstrument(instrument))
      )
    )
  );
