import { Epic } from "redux-observable";

import { IServices } from "../";
import { IAppAction } from "../redux/actions";

export type ApplicationEpic<T extends IAppAction = IAppAction> = Epic<
  T,
  T,
  {},
  IServices
>;
