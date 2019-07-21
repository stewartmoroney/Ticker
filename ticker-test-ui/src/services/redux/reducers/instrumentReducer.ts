import { Instrument } from './../../../state/types';
import { NEW_INSTRUMENT, IInstrumentAction } from '../actions';

type IInstrumentsState = Map<string, Instrument>;

export const initialState:IInstrumentsState = (() => {
   return new Map<string, Instrument>();
})();

const instrumentReducer = (state: IInstrumentsState = initialState, action: IInstrumentAction): IInstrumentsState  => { 
  const newState = new Map<string, Instrument>(state);
  if(action.type === NEW_INSTRUMENT) {
    newState.set(action.payload.id, {id:action.payload.id});
  }
  return newState
}
export default instrumentReducer;