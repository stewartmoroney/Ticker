import { Action } from "redux";

import { ActionTypes } from "./ActionTypes";

export interface IInstrumentSubscribeAction extends Action {
  payload: string;
  type: ActionTypes.SUBSCRIBE_INSTRUMENT;
}

export const subscribeInstrument = (
  id: string
): IInstrumentSubscribeAction => ({
  payload: id,
  type: ActionTypes.SUBSCRIBE_INSTRUMENT
});

export interface IInstrumentUnsubscribeAction extends Action {
  payload: string;
  type: ActionTypes.UNSUBSCRIBE_INSTRUMENT;
}

export const unsubscribeInstrument = (
  id: string
): IInstrumentUnsubscribeAction => ({
  payload: id,
  type: ActionTypes.UNSUBSCRIBE_INSTRUMENT
});

export interface IInstrumentSubscribeAckAction extends Action {
  payload: string;
  type: ActionTypes.SUBSCRIBE_INSTRUMENT_ACK;
}
export const subscribeAck = (
  instrumentId: string
): IInstrumentSubscribeAckAction => ({
  payload: instrumentId,
  type: ActionTypes.SUBSCRIBE_INSTRUMENT_ACK
});

export interface IInstrumentUnsubscribeAckAction extends Action {
  payload: string;
  type: ActionTypes.UNSUBSCRIBE_INSTRUMENT_ACK;
}
export const unsubscribeAck = (
  instrumentId: string
): IInstrumentUnsubscribeAckAction => ({
  payload: instrumentId,
  type: ActionTypes.UNSUBSCRIBE_INSTRUMENT_ACK
});
