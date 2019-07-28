import { Price } from '../../../state/types';
import { ActionTypes, IAppAction } from '../actions';

type IPriceState = {
  subscribedInstruments: string[];
  prices: Map<string, Price>
};

export const initialState:IPriceState = (() => {
   return {
    subscribedInstruments: [],
    prices: new Map<string, Price>()
  };
})();

const priceReducer = (state: IPriceState = initialState, action: IAppAction): IPriceState  => { 
  switch (action.type) {
    case ActionTypes.INSTRUMENT_PRICE: {
      const newPrices = new Map<string, Price>(state.prices);
      newPrices.set(action.payload.instrumentId, action.payload);
      return { ...state, prices: newPrices };  
    };
    case ActionTypes.SUBSCRIBE_INSTRUMENT: {
      const newSubscriptions = [...state.subscribedInstruments];
      const index = state.subscribedInstruments.indexOf(action.payload);
      if (index === -1) {
        newSubscriptions.push(action.payload);
      } else{
        newSubscriptions.splice(index, 1);
      }
      return { ...state, subscribedInstruments: newSubscriptions }
    };
    default:
      return state;
  }
}
export default priceReducer;
