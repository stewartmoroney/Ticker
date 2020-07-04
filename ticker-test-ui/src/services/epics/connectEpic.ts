import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";

import { ActionTypes } from "../redux/actions";
import { ApplicationEpic } from "./ApplicationEpic";

export const connectEpic: ApplicationEpic = (
  action$,
  state$,
  { webSocketService }
) =>
  action$.pipe(
    ofType(ActionTypes.CONNECT),
    mergeMap(action => webSocketService.connect())
  );
