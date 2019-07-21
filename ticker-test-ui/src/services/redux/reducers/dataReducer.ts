import {
  GRID_CLEAR,
  GRID_UPDATE,
  TICK,
} from '../actions/ActionTypes';

import { IVoidAppAction, IStringAppAction } from '../actions/Actions';

interface IDataState {
  rowData: [];
  tickerValue: string;
};


export const initialState: IDataState = {
  rowData: [],
  tickerValue: '<.. watiing ..>'
};

const dataReducer = (state: IDataState = initialState, action: IVoidAppAction |IStringAppAction): IDataState => {
  switch (action.type) {
    case TICK:
      return { ...state, tickerValue: action.payload };
    case GRID_CLEAR:
      return { ...state, rowData: [] };
    case GRID_UPDATE:
      return { ...state, rowData: JSON.parse(action.payload).rows };
    default:
      return state;
  }
};

export default dataReducer;
