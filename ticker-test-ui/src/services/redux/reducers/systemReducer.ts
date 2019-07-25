import { ActionTypes } from '../actions';

import { IAppAction } from '../actions';

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
    case ActionTypes.CONNECTED:
      return { ...state, connected: true, connectionStatus: ConnectionStatus.CONNECTED };
    case ActionTypes.NEW_SESSION:
      return { ...state, sessionId: action.payload };
    case ActionTypes.SUBSCRIBED:
      return { ...state, subscribed: true };
    case ActionTypes.UNSUBSCRIBED:
      return { ...state, subscribed: false };
    default:
      return state;
  }
};

export default systemReducer;