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

export interface ISubscribeAction extends Action {
  type: ActionTypes.SUBSCRIBE;
}
export const subscribe = (): ISubscribeAction => {
  return {
    type: ActionTypes.SUBSCRIBE
  };
};

export interface ISubscribedAction extends Action {
  type: ActionTypes.SUBSCRIBED
}
export const subscribed = ():ISubscribedAction => ({
  type: ActionTypes.SUBSCRIBED
});

export interface IUnsubscribeAction extends Action {
  type: ActionTypes.UNSUBSCRIBE
}
export const unsubscribe = ():IUnsubscribeAction => ({
  type: ActionTypes.UNSUBSCRIBE
});
export interface IUnsubscribedAction extends Action {
  type: ActionTypes.UNSUBSCRIBED
}
export const unsubscribed = ():IUnsubscribedAction => ({
  type: ActionTypes.UNSUBSCRIBED
});
