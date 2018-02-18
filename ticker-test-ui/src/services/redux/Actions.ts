import TickAction from './TickAction';

import { TICK, USER_UPDATE, STATUS, SESSION, GRID_UPDATE, 
  SUBSCRIBE, SUBSCRIBED, UNSUBSCRIBE, UNSUBSCRIBED } from './ActionTypes';

type StringTickActionCreator = (arg: String) => TickAction;
type VoidTickActionCreator = () => TickAction;

export const newTick: StringTickActionCreator = (s: string) => ({ type: TICK, payload: s });
export const updateUser: StringTickActionCreator = (s: string) => ({ type: USER_UPDATE, payload: s });
export const status: StringTickActionCreator = (s: string) => ({ type: STATUS, payload: s});
export const session: StringTickActionCreator  = (s: string) => ({ type: SESSION, payload: s});
export const dataUpdate: StringTickActionCreator = (s: string) => ({ type: GRID_UPDATE, payload: s});

export const subscribe: StringTickActionCreator = (s: string) => ({ type: SUBSCRIBE, payload: s});
export const subscribed: VoidTickActionCreator = () => ({ type: SUBSCRIBED, payload: ''});

export const unsubscribe: StringTickActionCreator = (s: string) => ({ type: UNSUBSCRIBE, payload: s});
export const unsubscribed: VoidTickActionCreator = () => ({ type: UNSUBSCRIBED, payload: ''});

export type TickActionCreator = StringTickActionCreator | VoidTickActionCreator;