import { Action } from 'redux'
import { Observable } from 'rxjs'

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './Reducer';
import epics from '../epics/Epics';
import TickerAppState from '../../state/TickerAppState';

export default () => {

  const middleware = createEpicMiddleware<Action, Action, TickerAppState>();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(middleware))
  );

  middleware.run(combineEpics(...epics))

  return store;
};
