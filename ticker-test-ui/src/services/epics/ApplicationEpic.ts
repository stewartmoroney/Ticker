import { Epic } from "redux-observable";

import { IServices } from "../";
import { IAppAction } from "../redux/actions";
import { GlobalState } from "../redux/GlobalState";

export type ApplicationEpic<T extends IAppAction = IAppAction> = Epic<
  T,
  T,
  GlobalState,
  IServices
>;
