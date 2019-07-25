import { Action } from 'redux';

import { ActionTypes } from './ActionTypes';

export interface IConnectAction extends Action {
  type: ActionTypes.CONNECT
}
export const connect = ():IConnectAction => ({
  type: ActionTypes.CONNECT
});

export interface IConnectedAction extends Action {
  type: ActionTypes.CONNECTED
}
export const connected = ():IConnectedAction => ({
  type:ActionTypes.CONNECTED
});

export interface INewSessionAction extends Action {
  payload: string
  type: ActionTypes.NEW_SESSION
}
export const newSession = (s: string):INewSessionAction => ({
  payload: s,
  type: ActionTypes.NEW_SESSION,
});
