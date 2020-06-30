import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import systemReducer from './systemReducer';
import instrumentReducer from './instrumentReducer';
import priceReducer from './priceReducer';
import subscriptionReducer from './subscriptionReducer';

export default combineReducers({
  system: systemReducer,
  instruments: instrumentReducer,
  prices: priceReducer,
  subscriptions: subscriptionReducer,
  data: dataReducer
});
