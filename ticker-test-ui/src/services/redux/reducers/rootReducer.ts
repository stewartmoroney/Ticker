import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import systemReducer from './systemReducer';
import instrumentReducer from './instrumentReducer';

export default combineReducers({
  system: systemReducer,
  instruments: instrumentReducer,
  data: dataReducer
});
