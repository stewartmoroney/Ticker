import {
  CONNECTED,
  NEW_SESSION,
  SUBSCRIBED,
  UNSUBSCRIBED,
  TICK,
  GRID_CLEAR,
  GRID_UPDATE
} from './ActionTypes';
import TickerAppState from './../../state/TickerAppState';
import TickAction from './../redux/TickAction';

const initialState: TickerAppState = {
  connected: false,
  subscribed: false,
  tickerStatus: 'Connecting...',
  sessionId: '',
  tickerValue: '<.. watiing ..>',
  columnDefs: [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Value', field: 'value' }
  ],
  rowData: []
};

export default (state: TickerAppState = initialState, action: TickAction) => {
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
