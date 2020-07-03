import {
  IConnectAction,
  IConnectedAction,
  IDisconnectedAction
} from "./ConnectionActions";
import { IInstrumentAction } from "./InstrumentActions";
import {
  IInstrumentSubscribeAckAction,
  IInstrumentSubscribeAction,
  IInstrumentUnsubscribeAckAction,
  IInstrumentUnsubscribeAction,
  IPriceAction
} from "./PriceActions";
import { IThemeAction } from "./ThemeActions";

export * from "./ActionTypes";
export * from "./ConnectionActions";
export * from "./InstrumentActions";
export * from "./PriceActions";
export * from "./ThemeActions";

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
