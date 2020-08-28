import { combineReducers } from "redux";

import subscriptionReducer from "./subscriptionReducer";
import systemReducer from "./systemReducer";

export default combineReducers({
  system: systemReducer,
  subscriptions: subscriptionReducer
});
