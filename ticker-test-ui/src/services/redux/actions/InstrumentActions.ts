import { Action } from 'redux';

import { Instrument } from '../../../state/types';

import {
NEW_INSTRUMENT, SUBSCRIBE_INSTRUMENT,
} from './ActionTypes';
import { IStringAppAction, StringActionCreator } from './Actions';

export interface IInstrumentAction extends Action {
  payload: Instrument;
  type: typeof NEW_INSTRUMENT;
}


export const subscribeInstrument: StringActionCreator = (id: string): IStringAppAction => {
  return {
    payload: id,
    type: SUBSCRIBE_INSTRUMENT
  };
}



export const newInstrument: InstrumentActionCreator = (newInstrument: Instrument): IInstrumentAction => {
  return {
    payload: newInstrument,
    type: NEW_INSTRUMENT
  };
}


type InstrumentActionCreator = (i: Instrument) => IInstrumentAction;
