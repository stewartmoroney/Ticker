import {
  CONNECTED,
  NEW_SESSION,
  SUBSCRIBED,
  UNSUBSCRIBED
} from '../actions/ActionTypes';

import { IAppAction } from '../actions/Actions';

import { ConnectionStatus } from '../../../state/types';

interface ISystemState  {
  connected: boolean;
  sessionId: string;
  connectionStatus: ConnectionStatus;
  subscribed: boolean;
};

export const initialState: ISystemState = {
  connected: false,
  sessionId: '',
  subscribed: false,
  connectionStatus: ConnectionStatus.DISCONNECTED
};

const systemReducer = (state: ISystemState = initialState, action: IAppAction ): ISystemState => {
  switch (action.type) {
    case CONNECTED:
      return { ...state, connected: true, connectionStatus: ConnectionStatus.CONNECTED };
    case NEW_SESSION:
      return { ...state, sessionId: action.payload };
    case SUBSCRIBED:
      return { ...state, subscribed: true };
    case UNSUBSCRIBED:
      return { ...state, subscribed: false };
    default:
      return state;
  }
};

export default systemReducer;