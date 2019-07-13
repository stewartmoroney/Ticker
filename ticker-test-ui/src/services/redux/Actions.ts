import ITickAction from './TickAction';

import {
  CONNECT,
  CONNECTED,
  GRID_UPDATE,
  NEW_SESSION,
  SUBSCRIBE,
  SUBSCRIBED,
  TICK,
  UNSUBSCRIBE,
  UNSUBSCRIBED
} from './ActionTypes';

type StringTickActionCreator = (arg: string) => ITickAction;
type VoidTickActionCreator = () => ITickAction;

export const connect: VoidTickActionCreator = () => ({
  payload: '',
  type: CONNECT
});
export const connected: VoidTickActionCreator = () => ({
  payload: '',
  type: CONNECTED
});

export const newTick: StringTickActionCreator = (s: string) => ({
  payload: s,
  type: TICK
});
export const newSession: StringTickActionCreator = (s: string) => ({
  payload: s,
  type: NEW_SESSION,
});
export const dataUpdate: StringTickActionCreator = (s: string) => ({
  payload: s,
  type: GRID_UPDATE
});

export const subscribe: VoidTickActionCreator = () => ({
  payload: '',
  type: SUBSCRIBE
});
export const subscribed: VoidTickActionCreator = () => ({
  payload: '',
  type: SUBSCRIBED
});

export const unsubscribe: VoidTickActionCreator = () => ({
  payload: '',
  type: UNSUBSCRIBE
});
export const unsubscribed: VoidTickActionCreator = () => ({
  payload: '',
  type: UNSUBSCRIBED
});

export type TickActionCreator = StringTickActionCreator | VoidTickActionCreator;
