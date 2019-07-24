import { Price } from '../../../state/types';
import { IPriceAction, ActionTypes } from '../actions';

type IPriceState = Map<string, Price>;

export const initialState:IPriceState = (() => {
   return new Map<string, Price>();
})();

const priceReducer = (state: IPriceState = initialState, action: IPriceAction): IPriceState  => { 
  const newState = new Map<string, Price>(state);
  if(action.type === ActionTypes.INSTRUMENT_PRICE) {
    // newState.set(action.payload.id, {id:action.payload.id});
  }
  return newState
}
export default priceReducer;
