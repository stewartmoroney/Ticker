import { TICK, USER_UPDATE, STATUS, SESSION, GRID_UPDATE, SUBSCRIBE, UNSUBSCRIBE } from './ActionTypes';

export const newTick = (s: string) => ({ type: TICK, payload: s });

export const updateUser = (s: string) => ({ type: USER_UPDATE, payload: s });

export const status = (s: string) => ({ type: STATUS, payload: s});

export const session  = (s: string) => ({ type: SESSION, payload: s});

export const dataUpdate = (s: string) => ({ type: GRID_UPDATE, payload: s});

export const subscribe = (s: string) => ({ type: SUBSCRIBE, payload: s});

export const unsubscribe = (s: string) => ({ type: UNSUBSCRIBE, payload: s});
