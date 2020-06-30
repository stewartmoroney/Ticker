import { Instrument } from './../../../state/types';
import { ActionTypes, IAppAction } from '../actions';

type IInstrumentsState = Instrument[];

export const initialState:IInstrumentsState = [];

const instrumentReducer = (state: IInstrumentsState = initialState, action: IAppAction): IInstrumentsState  => { 
  const newState = state; 
  if(action.type === ActionTypes.NEW_INSTRUMENT) {
    return newState.concat({id: action.payload.id})
  }
  return newState
}
export default instrumentReducer;
