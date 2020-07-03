import { ofType } from "redux-observable";
import { delay, map } from "rxjs/operators";

import { ActionTypes, connect } from "../redux/actions";
import { ApplicationEpic } from "./ApplicationEpic";

export const disconnectEpic: ApplicationEpic = action$ =>
  action$.pipe(
    ofType(ActionTypes.DISCONNECTED),
    delay(5000),
    map(action => connect())
  );
