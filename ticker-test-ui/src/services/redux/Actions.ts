import TickAction from './TickAction';

import { CONNECTED, TICK, NEW_SESSION, GRID_UPDATE, 
  SUBSCRIBE, SUBSCRIBED, UNSUBSCRIBE, UNSUBSCRIBED } from './ActionTypes';

type StringTickActionCreator = (arg: String) => TickAction;
type VoidTickActionCreator = () => TickAction;

export const connected: VoidTickActionCreator = () => ({type: CONNECTED, payload: ''});

export const newTick: StringTickActionCreator = (s: string) => ({ type: TICK, payload: s });
export const newSession: StringTickActionCreator  = (s: string) => ({ type: NEW_SESSION, payload: s});
export const dataUpdate: StringTickActionCreator = (s: string) => ({ type: GRID_UPDATE, payload: s});

export const subscribe: VoidTickActionCreator = () => ({ type: SUBSCRIBE, payload: ''});
export const subscribed: VoidTickActionCreator = () => ({ type: SUBSCRIBED, payload: ''});

export const unsubscribe: VoidTickActionCreator = () => ({ type: UNSUBSCRIBE, payload: ''});
export const unsubscribed: VoidTickActionCreator = () => ({ type: UNSUBSCRIBED, payload: ''});

export type TickActionCreator = StringTickActionCreator | VoidTickActionCreator;