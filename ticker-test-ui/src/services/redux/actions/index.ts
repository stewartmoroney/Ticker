import {
  IConnectAction,
  IConnectedAction,
  IDisconnectedAction
} from "./connectionActions";
import { IInstrumentAction } from "./instrumentActions";
import {
  IInstrumentSubscribeAckAction,
  IInstrumentSubscribeAction,
  IInstrumentUnsubscribeAckAction,
  IInstrumentUnsubscribeAction,
  IPriceAction
} from "./priceActions";
import { IThemeAction } from "./themeActions";

export * from "./ActionTypes";
export * from "./connectionActions";
export * from "./instrumentActions";
export * from "./priceActions";
export * from "./themeActions";

export type IAppAction =
  | IConnectAction
  | IConnectedAction
  | IDisconnectedAction
  | IThemeAction
  | IInstrumentSubscribeAction
  | IPriceAction
  | IInstrumentAction
  | IInstrumentSubscribeAckAction
  | IInstrumentUnsubscribeAction
  | IInstrumentUnsubscribeAckAction;
