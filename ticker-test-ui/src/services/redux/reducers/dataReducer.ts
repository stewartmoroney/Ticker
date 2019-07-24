import { ActionTypes } from '../actions';

import { IAppAction } from '../actions';

interface IDataState {
  rowData: [];
  tickerValue: string;
};

export const initialState: IDataState = {
  rowData: [],
  tickerValue: '<.. watiing ..>'
};

const dataReducer = (state: IDataState = initialState, action: IAppAction): IDataState => {
  switch (action.type) {
    case ActionTypes.TICK:
      return { ...state, tickerValue: action.payload };
    case ActionTypes.GRID_CLEAR:
      return { ...state, rowData: [] };
    case ActionTypes.GRID_UPDATE:
      return { ...state, rowData: JSON.parse(action.payload).rows };
    default:
      return state;
  }
};

export default dataReducer;
