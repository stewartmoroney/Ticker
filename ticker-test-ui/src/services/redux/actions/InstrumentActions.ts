import { Action } from 'redux';

import { Instrument, Price } from '../../../state/types';

import {
NEW_INSTRUMENT, SUBSCRIBE_INSTRUMENT, INSTRUMENT_PRICE, UNSUBSCRIBE_INSTRUMENT 
} from './ActionTypes';
import { IStringAppAction, StringActionCreator } from './Actions';


export interface ISubscribeAction {
  payload: string,
  type: typeof SUBSCRIBE_INSTRUMENT
}

export const subscribeInstrument = (id: string): ISubscribeAction => {
  return {
    payload: id,
    type: SUBSCRIBE_INSTRUMENT
  };
}

export const unsubscribeInstrument: StringActionCreator = (id: string): IStringAppAction => {
  return {
    payload: id,
    type: UNSUBSCRIBE_INSTRUMENT
  };
}

export interface IInstrumentAction extends Action {
  payload: Instrument;
  type: typeof NEW_INSTRUMENT;
}

type InstrumentActionCreator = (i: Instrument) => IInstrumentAction;
export const newInstrument: InstrumentActionCreator = (newInstrument: Instrument): IInstrumentAction => {
  return {
    payload: newInstrument,
    type: NEW_INSTRUMENT
  };
}

export interface IPriceAction extends Action {
  payload: Price;
  type: typeof INSTRUMENT_PRICE;
}

type PriceActionCreator = (price: Price) => IPriceAction;
export const newPrice: PriceActionCreator = (price: Price): IPriceAction => {
  return {
    payload: price,
    type: INSTRUMENT_PRICE
  };
}
