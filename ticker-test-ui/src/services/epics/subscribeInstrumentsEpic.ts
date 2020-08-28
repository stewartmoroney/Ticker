import { ofType } from "redux-observable";
import { ignoreElements, tap } from "rxjs/operators";

import { ActionTypes, IAppAction, IConnectedAction } from "../redux/actions";
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
