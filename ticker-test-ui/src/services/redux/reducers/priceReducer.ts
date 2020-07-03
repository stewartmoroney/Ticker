import { Price } from "../../../state/types";
import { ActionTypes, IAppAction } from "../actions";

type IPriceState = Price[];

export const initialState: IPriceState = [];

const priceReducer = (
  state: IPriceState = initialState,
  action: IAppAction
): IPriceState => {
  switch (action.type) {
    case ActionTypes.INSTRUMENT_PRICE: {
      const newPrices = [...state];
      const index = state.findIndex(
        price => price.instrumentId === action.payload.instrumentId
      );

      if (index !== -1) {
        newPrices.splice(index, 1);
      }
      newPrices.push(action.payload);

      return newPrices;
    }
    case ActionTypes.UNSUBSCRIBE_INSTRUMENT_ACK: {
      const newPrices = [...state];
      const index = state.findIndex(
        price => price.instrumentId === action.payload
      );

      if (index !== -1) {
        newPrices.splice(index, 1);
      }
      return newPrices;
    }
  }

  return state;
};
export default priceReducer;
