import { Action, Store } from "redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import initServices, { IServices } from "../";
import epics from "../epics";
import { GlobalState } from "./GlobalState";
import rootReducer from "./reducers/rootReducer";

export default (): Store => {
  const middleware = createEpicMiddleware<
    Action,
    Action,
    GlobalState,
    IServices
  >({
    dependencies: initServices()
  });
  const store: Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(middleware))
  );

  middleware.run(combineEpics(...epics));

  return store;
};
