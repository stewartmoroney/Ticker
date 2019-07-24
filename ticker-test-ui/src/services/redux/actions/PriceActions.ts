import { Action } from 'redux';

import { ActionTypes } from './ActionTypes';
import { Price } from '../../../state/types';

export interface  IPriceSubscribeAction extends Action {
  type: typeof ActionTypes.SUBSCRIBE;
}
export const subscribe = (): IPriceSubscribeAction => {
  return {
    type: ActionTypes.SUBSCRIBE
  };
};

export interface IPriceAction extends Action {
  payload: Price;
  type: typeof ActionTypes.INSTRUMENT_PRICE;
}
export const newPrice = (price: Price): IPriceAction => {
  return {
    payload: price,
    type: ActionTypes.INSTRUMENT_PRICE
  };
};
