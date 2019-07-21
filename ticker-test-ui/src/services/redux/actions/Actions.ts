import { Action } from 'redux';

import {
  CONNECT,
  CONNECTED,
  GRID_UPDATE,
  NEW_SESSION,
  SUBSCRIBE,
  SUBSCRIBED,
  TICK,
  UNSUBSCRIBE,
  UNSUBSCRIBED,
  GRID_CLEAR,
  SUBSCRIBE_INSTRUMENT
} from './ActionTypes';
import { IInstrumentAction } from './InstrumentActions';

export interface IStringAppAction extends Action {
  type: typeof TICK | typeof NEW_SESSION | typeof GRID_UPDATE| typeof SUBSCRIBE_INSTRUMENT;
  payload: string;
}
export interface IVoidAppAction extends Action {
  type: typeof CONNECT | 
  typeof CONNECTED | 
  typeof SUBSCRIBE | 
  typeof SUBSCRIBED | 
  typeof UNSUBSCRIBE | 
  typeof UNSUBSCRIBED |
  typeof GRID_CLEAR;
}


export type StringActionCreator = (arg: string) => IStringAppAction;
export type VoidTickActionCreator = () => IVoidAppAction;

export const connect: VoidTickActionCreator = ():IVoidAppAction => ({
  type: CONNECT
});
export const connected: VoidTickActionCreator = ():IVoidAppAction => ({
  type: CONNECTED
});

export const newTick: StringActionCreator = (s: string):IStringAppAction => ({
  payload: s,
  type: TICK
});
export const newSession: StringActionCreator = (s: string):IStringAppAction => ({
  payload: s,
  type: NEW_SESSION,
});
export const dataUpdate: StringActionCreator = (s: string):IStringAppAction => ({
  payload: s,
  type: GRID_UPDATE
});

export const subscribe: VoidTickActionCreator = ():IVoidAppAction => ({
  type: SUBSCRIBE
});
export const subscribed: VoidTickActionCreator = ():IVoidAppAction => ({
  type: SUBSCRIBED
});

export const unsubscribe: VoidTickActionCreator = ():IVoidAppAction => ({
  type: UNSUBSCRIBE
});
export const unsubscribed: VoidTickActionCreator = ():IVoidAppAction => ({
  type: UNSUBSCRIBED
});


export type TickActionCreator = StringActionCreator | VoidTickActionCreator;

export type IAppAction = IStringAppAction | IVoidAppAction | IInstrumentAction;
