import { ConnectionStatus, ThemeName } from "../../../state/types";
import { defaultTheme } from "../../../ui/shared";
import { ActionTypes } from "../actions";
import { IAppAction } from "../actions";

interface ISystemState {
  connected: boolean;
  sessionId: string;
  connectionStatus: ConnectionStatus;
  themeName: ThemeName;
}

export const initialState: ISystemState = {
  connected: false,
  sessionId: "",
  connectionStatus: ConnectionStatus.DISCONNECTED,
  themeName: defaultTheme
};

const flipTheme = (themeName: ThemeName): ThemeName =>
  themeName === "dark" ? "light" : "dark";

const systemReducer = (
  state: ISystemState = initialState,
  action: IAppAction
): ISystemState => {
  switch (action.type) {
    case ActionTypes.CONNECTED:
      return {
        ...state,
        connected: true,
        connectionStatus: ConnectionStatus.CONNECTED
      };
    case ActionTypes.DISCONNECTED:
      return {
        ...state,
        connected: false,
        connectionStatus: ConnectionStatus.DISCONNECTED
      };
    case ActionTypes.TOGGLE_THEME:
      return { ...state, themeName: flipTheme(state.themeName) };
    default:
      return state;
  }
};

export default systemReducer;
