import {
  IConnectAction,
  IConnectedAction,
  IDisconnectedAction
} from "./connectionActions";
import {
  IInstrumentSubscribeAckAction,
  IInstrumentSubscribeAction,
  IInstrumentUnsubscribeAckAction,
  IInstrumentUnsubscribeAction
} from "./priceActions";
import { IThemeAction } from "./themeActions";

export * from "./ActionTypes";
export * from "./connectionActions";
export * from "./priceActions";
export * from "./themeActions";

export type IAppAction =
  | IConnectAction
  | IConnectedAction
  | IDisconnectedAction
  | IThemeAction
  | IInstrumentSubscribeAction
  | IInstrumentSubscribeAckAction
  | IInstrumentUnsubscribeAction
  | IInstrumentUnsubscribeAckAction;
