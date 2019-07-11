import { Action } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { Observable } from 'rxjs';

import rootReducer from './Reducer';

import epics from '../epics/Epics';

import ITickerAppState from '../../state/TickerAppState';

export default () => {

  const middleware = createEpicMiddleware<Action, Action, ITickerAppState>();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(middleware))
  );

  middleware.run(combineEpics(...epics));

  return store;
};
