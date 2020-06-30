import { Action } from 'redux';

import { ActionTypes } from './ActionTypes';
import { Price } from '../../../state/types';

export interface IPriceAction extends Action {
  payload: Price;
  type: ActionTypes.INSTRUMENT_PRICE;
}
export const newPrice = (price: Price): IPriceAction => {
  return {
    payload: price,
    type: ActionTypes.INSTRUMENT_PRICE
  };
};

export interface IInstrumentSubscribeAction extends Action {
  payload: string,
  type: ActionTypes.SUBSCRIBE_INSTRUMENT
}

export interface IInstrumentUnsubscribeAction extends Action {
  payload: string,
  type: ActionTypes.UNSUBSCRIBE_INSTRUMENT
}

export const subscribeInstrument = (id: string): IInstrumentSubscribeAction => {
  return {
    payload: id,
    type: ActionTypes.SUBSCRIBE_INSTRUMENT
  };
};

export const unsubscribeInstrument = (id: string): IInstrumentUnsubscribeAction => {
  return {
    payload: id,
    type: ActionTypes.UNSUBSCRIBE_INSTRUMENT
  };
};

export interface IInstrumentSubscribeAckAction extends Action {
  type: ActionTypes.ACK
}
export const ack = (): IInstrumentSubscribeAckAction => {
  return {
    type: ActionTypes.ACK
  };
};
