import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './Reducer';
import { loggingEpic } from '../epics/Epics';

const epicMiddleware = createEpicMiddleware(loggingEpic);

export default createStore(rootReducer
	, applyMiddleware(epicMiddleware)
	);
