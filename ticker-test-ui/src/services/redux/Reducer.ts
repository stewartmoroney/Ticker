import { TICK, STATUS, USER_UPDATE, SESSION, GRID_CLEAR, GRID_UPDATE, SUBSCRIBED, UNSUBSCRIBED }  from './ActionTypes';
import TickerAppState from './../../state/TickerAppState';
import TickAction from './../redux/TickAction';

const initialState: TickerAppState = {
  connected: false,
  subscribed: false,
  tickerStatus: 'Connecting',
  sessionId: '',
  tickerValue: '<.. watiing ..>',
  userName: '..',
  columnDefs: [
    {headerName: 'ID', field: 'id'},
    {headerName: 'Name', field: 'name'},
    {headerName: 'Value', field: 'value'}
  ],
  rowData: []
};

export default (state: TickerAppState = initialState, action: TickAction) => {
  switch (action.type) {
    case TICK:
      return { ...state, tickerValue: action.payload };
    case STATUS:
      return { ...state, tickerStatus: action.payload };
    case USER_UPDATE:
      return { ...state, userName: action.payload };
    case SESSION:
      return { ...state, sessionId: action.payload };
    case GRID_CLEAR:
      return { ...state, rowData: []};
    case GRID_UPDATE:
      return { ...state, rowData: JSON.parse(action.payload).rows };
    case SUBSCRIBED:
      return { ...state, subscribed: true };
    case UNSUBSCRIBED:
      return { ...state, subscribed: false };
    default:
      return state;
  }
};