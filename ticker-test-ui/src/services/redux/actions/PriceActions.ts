import { Action } from "redux";

import { Price } from "../../../state/types";
import { ActionTypes } from "./ActionTypes";

export interface IPriceAction extends Action {
  payload: Price;
  type: ActionTypes.INSTRUMENT_PRICE;
}
export const newPrice = (price: Price): IPriceAction => ({
  payload: price,
  type: ActionTypes.INSTRUMENT_PRICE
});

export interface IInstrumentSubscribeAction extends Action {
  payload: string;
  type: ActionTypes.SUBSCRIBE_INSTRUMENT;
}

export interface IInstrumentUnsubscribeAction extends Action {
  payload: string;
  type: ActionTypes.UNSUBSCRIBE_INSTRUMENT;
}

export const subscribeInstrument = (
  id: string
): IInstrumentSubscribeAction => ({
  payload: id,
  type: ActionTypes.SUBSCRIBE_INSTRUMENT
});

export const unsubscribeInstrument = (
  id: string
): IInstrumentUnsubscribeAction => ({
  payload: id,
  type: ActionTypes.UNSUBSCRIBE_INSTRUMENT
});

export interface IInstrumentSubscribeAckAction extends Action {
  type: ActionTypes.ACK;
}
export const ack = (): IInstrumentSubscribeAckAction => ({
  type: ActionTypes.ACK
});
