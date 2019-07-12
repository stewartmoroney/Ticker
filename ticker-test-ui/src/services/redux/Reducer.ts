import { combineReducers } from 'redux';

import {
  CONNECTED,
  GRID_CLEAR,
  GRID_UPDATE,
  NEW_SESSION,
  SUBSCRIBED,
  TICK,
  UNSUBSCRIBED
} from './ActionTypes';

import ITickAction from './../redux/TickAction';

import ITickerAppState from './../../state/TickerAppState';

const initialState = {
  columnDefs: [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Value', field: 'value' }
  ],
  connected: false,
  rowData: [],
  sessionId: '',
  subscribed: false,
  tickerStatus: 'Connecting...',
  tickerValue: '<.. watiing ..>'
};

const appReducer = (state: ITickerAppState = initialState, action: ITickAction): ITickerAppState => {
  switch (action.type) {
    case CONNECTED:
      return { ...state, connected: true, tickerStatus: 'Connected' };
    case TICK:
      return { ...state, tickerValue: action.payload };
    case NEW_SESSION:
      return { ...state, sessionId: action.payload };
    case GRID_CLEAR:
      return { ...state, rowData: [] };
    case GRID_UPDATE:
      return { ...state, rowData: JSON.parse(action.payload).rows };
    case SUBSCRIBED:
      return { ...state, subscribed: true, tickerStatus: 'Listening' };
    case UNSUBSCRIBED:
      return { ...state, subscribed: false, tickerStatus: 'Not Listening' };
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer
});
