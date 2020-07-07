import { ofType } from "redux-observable";
import { ignoreElements, map, tap } from "rxjs/operators";

import {
  ActionTypes,
  IAppAction,
  IConnectedAction,
  newInstrument
} from "../redux/actions";
import { ApplicationEpic } from "./ApplicationEpic";

export const sendInstrumentSubscribeEpic: ApplicationEpic = (
  action$,
  state$,
  { instrumentSubscribe }
) =>
  action$.pipe(
    ofType<IAppAction, IConnectedAction>(ActionTypes.CONNECTED),
    tap(() => {
      instrumentSubscribe();
    }),
    ignoreElements()
  );

export const subscribeInstrumentsEpic: ApplicationEpic = (
  action$,
  state$,
  { subscribedInstruments }
) => subscribedInstruments().pipe(map(instrument => newInstrument(instrument)));
