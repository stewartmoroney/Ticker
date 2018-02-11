import { TICK, STATUS, LOGON, SESSION, GRID_CLEAR, GRID_UPDATE }  from './ActionTypes';
import TickerAppState from '../../state/TickerAppState';

const initialState: TickerAppState = {
  tickerStatus: 'Connecting',
  sessionId: '',
  tickerValue: '<.. watiing ..>',
  userName: '..',
  columnDefs: [
    {headerName: 'ID', field: 'id'},
    {headerName: 'Name', field: 'name'},
    {headerName: 'Value', field: 'value'}
  ],
  rowData: [
    // {id: 1, name: 'Celica', value: 35000},
    // {id: 2, name: 'Mondeo', value: 32000},
    // {id: 3, name: 'Boxter', value: 72000}
  ]
};

export default (state: TickerAppState = initialState, action: any) => {
  switch (action.type) {
    case TICK:
      return { ...state, tickerValue: action.payload };
    case STATUS:
      return { ...state, tickerStatus: action.payload };
    case LOGON:
      return { ...state, userName: action.payload };
    case SESSION:
      return { ...state, sessionId: action.payload };
    case GRID_CLEAR:
      return { ...state, rowData: []};
    case GRID_UPDATE:
      return { ...state, rowData: JSON.parse(action.payload).rows };
    default:
      return state;
  }
};