import { Action, createStore, applyMiddleware } from 'redux';
import { ActionsObservable, createEpicMiddleware } from 'redux-observable';
import 'rxjs';

import { map, filter, switchMap } from 'rxjs/operators';

import rootReducer from './Reducer';
import { loggingEpic } from '../epics/Epics';

const epicMiddleware = createEpicMiddleware(loggingEpic);

export default createStore(rootReducer
	, applyMiddleware(epicMiddleware)
	);
