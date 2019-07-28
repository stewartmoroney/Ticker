import { ActionTypes } from '../actions';

import { IAppAction } from '../actions';

import { ConnectionStatus, ThemeName } from '../../../state/types';
import { defaultTheme } from '../../../ui/shared';

interface ISystemState  {
  connected: boolean;
  sessionId: string;
  connectionStatus: ConnectionStatus;
  subscribed: boolean;
  themeName: ThemeName;
};

export const initialState: ISystemState = {
  connected: false,
  sessionId: '',
  subscribed: false,
  connectionStatus: ConnectionStatus.DISCONNECTED,
  themeName: defaultTheme
};

const flipTheme = (themeName: ThemeName):ThemeName => {
  return (themeName === 'dark') ? 'light' : 'dark';
}  

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
    case ActionTypes.TOGGLE_THEME:
        return { ...state, themeName: flipTheme(state.themeName) };
    default:
      return state;
  }
};

export default systemReducer;