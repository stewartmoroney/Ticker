import { TICK, LOGON, STATUS, SESSION, GRID_UPDATE } from './ActionTypes';

export const newTick = (s: string) => ({ type: TICK, payload: s });

export const logon = (s: string) => ({ type: LOGON, payload: s });

export const status = (s: string) => ({ type: STATUS, payload: s});

export const session  = (s: string) => ({ type: SESSION, payload: s});

export const dataUpdate = (s: string) => ({ type: GRID_UPDATE, payload: s});