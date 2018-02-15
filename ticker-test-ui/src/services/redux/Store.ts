import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './Reducer';
import rootEpic from '../epics/Epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(epicMiddleware)
  ),
);