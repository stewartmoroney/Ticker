import { Action, Store } from "redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import initServices, { IServices } from "../";
import epics from "../epics";

export default (): Store => {
  const middleware = createEpicMiddleware<Action, Action, {}, IServices>({
    dependencies: initServices()
  });
  const store: Store = createStore((a, b) => {},
  composeWithDevTools(applyMiddleware(middleware)));

  middleware.run(combineEpics(...epics));

  return store;
};
