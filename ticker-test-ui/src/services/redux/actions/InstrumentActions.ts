import { Action } from "redux";

import { Instrument } from "../../../state/types";
import { ActionTypes } from "./ActionTypes";

export interface IInstrumentAction extends Action {
  payload: Instrument;
  type: ActionTypes.NEW_INSTRUMENT;
}
export const newInstrument = (
  newInstrument: Instrument
): IInstrumentAction => ({
  payload: newInstrument,
  type: ActionTypes.NEW_INSTRUMENT
});
