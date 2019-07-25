import { Action } from 'redux';

import { Instrument } from '../../../state/types';

import { ActionTypes } from './ActionTypes';

export interface IInstrumentSubscribeAction extends Action {
  payload: string,
  type: ActionTypes.SUBSCRIBE_INSTRUMENT
}
export const subscribeInstrument = (id: string): IInstrumentSubscribeAction => {
  return {
    payload: id,
    type: ActionTypes.SUBSCRIBE_INSTRUMENT
  };
};

export interface IInstrumentAction extends Action {
  payload: Instrument;
  type: ActionTypes.NEW_INSTRUMENT;
}
export const newInstrument = (newInstrument: Instrument): IInstrumentAction => {
  return {
    payload: newInstrument,
    type: ActionTypes.NEW_INSTRUMENT
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
