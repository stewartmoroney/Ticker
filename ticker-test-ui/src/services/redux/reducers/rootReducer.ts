import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import systemReducer from './systemReducer';

export default combineReducers({
  system: systemReducer,
  data: dataReducer
});
