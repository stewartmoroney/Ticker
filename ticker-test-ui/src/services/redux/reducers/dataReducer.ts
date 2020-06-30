import { ActionTypes } from '../actions';

import { IAppAction } from '../actions';

interface IDataState {
  rowData: [];
  tickerValue: {
    id: string,
    timeStamp: string
  };
};

export const initialState: IDataState = {
  rowData: [],
  tickerValue: {
    id: '',
    timeStamp: ''
  } 
};

const dataReducer = (state: IDataState = initialState, action: IAppAction): IDataState => {
  switch (action.type) {
    case ActionTypes.TICK:
      return { ...state, tickerValue: JSON.parse(action.payload) };
    case ActionTypes.GRID_CLEAR:
      return { ...state, rowData: [] };
    case ActionTypes.GRID_UPDATE:
      return { ...state, rowData: JSON.parse(action.payload).rows };
    default:
      return state;
  }
};

export default dataReducer;
