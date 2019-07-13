import { Action } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import rootReducer from './Reducer';

import Bootstraper, { IServices } from '../Bootstraper';
import epics, { GlobalState } from '../epics/Epics';

export default () => {

  const middleware = createEpicMiddleware<Action, Action, GlobalState, IServices>({
    dependencies: Bootstraper.services
  });
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(middleware))
  );

  middleware.run(combineEpics(...epics));

  return store;
};
