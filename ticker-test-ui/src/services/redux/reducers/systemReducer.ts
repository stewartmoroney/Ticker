import { ActionTypes } from '../actions';

import { IAppAction } from '../actions';

import { ConnectionStatus, ThemeName } from '../../../state/types';
import { defaultTheme } from '../../../ui/shared';

interface ISystemState  {
  connected: boolean;
  sessionId: string;
  connectionStatus: ConnectionStatus;
  themeName: ThemeName;
};

export const initialState: ISystemState = {
  connected: false,
  sessionId: '',
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
    case ActionTypes.TOGGLE_THEME:
        return { ...state, themeName: flipTheme(state.themeName) };
    default:
      return state;
  }
};

export default systemReducer;