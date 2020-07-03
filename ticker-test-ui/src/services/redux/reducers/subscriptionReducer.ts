import { ActionTypes, IAppAction } from "../actions";

type ISubscriptionState = {
  subscribedInstruments: string[];
};

export const initialState: ISubscriptionState = (() => ({
  subscribedInstruments: []
}))();

const subscriptionReducer = (
  state: ISubscriptionState = initialState,
  action: IAppAction
): ISubscriptionState => {
  switch (action.type) {
    case ActionTypes.SUBSCRIBE_INSTRUMENT_ACK: {
      const subscriptions = [...state.subscribedInstruments];
      const index = state.subscribedInstruments.indexOf(action.payload);
      if (index === -1) {
        subscriptions.push(action.payload);
      }
      return { ...state, subscribedInstruments: subscriptions };
    }
    case ActionTypes.UNSUBSCRIBE_INSTRUMENT_ACK: {
      const subscriptions = [...state.subscribedInstruments];
      const index = state.subscribedInstruments.indexOf(action.payload);
      if (index !== -1) {
        subscriptions.splice(index, 1);
      }
      return { ...state, subscribedInstruments: subscriptions };
    }

    default:
      return state;
  }
};
export default subscriptionReducer;
