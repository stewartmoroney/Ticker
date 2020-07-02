import { combineReducers } from "redux";

import instrumentReducer from "./instrumentReducer";
import priceReducer from "./priceReducer";
import subscriptionReducer from "./subscriptionReducer";
import systemReducer from "./systemReducer";

export default combineReducers({
  system: systemReducer,
  instruments: instrumentReducer,
  prices: priceReducer,
  subscriptions: subscriptionReducer
});
