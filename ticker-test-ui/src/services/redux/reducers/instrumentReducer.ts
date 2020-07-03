import { ActionTypes, IAppAction } from "../actions";
import { Instrument } from "./../../../state/types";

type IInstrumentsState = Instrument[];

export const initialState: IInstrumentsState = [];

const instrumentReducer = (
  state: IInstrumentsState = initialState,
  action: IAppAction
): IInstrumentsState => {
  const newState = state;
  if (action.type === ActionTypes.NEW_INSTRUMENT) {
    const newInstruments = [...state];
    const index = state.findIndex(
      instrument => instrument.id === action.payload.id
    );

    if (index !== -1) {
      newInstruments.splice(index, 1);
    }
    newInstruments.push(action.payload);

    return newInstruments;
  }
  return newState;
};
export default instrumentReducer;
