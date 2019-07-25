import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import systemReducer from './systemReducer';
import instrumentReducer from './instrumentReducer';
import priceReducer from './priceReducer';

export default combineReducers({
  system: systemReducer,
  instruments: instrumentReducer,
  prices: priceReducer,
  data: dataReducer
});
