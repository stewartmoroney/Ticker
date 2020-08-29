import { ConnectionStatus } from "../../../state/types";
import { ActionTypes } from "../actions";
import { IAppAction } from "../actions";

interface ISystemState {
  connected: boolean;
  sessionId: string;
  connectionStatus: ConnectionStatus;
}

export const initialState: ISystemState = {
  connected: false,
  sessionId: "",
  connectionStatus: ConnectionStatus.DISCONNECTED
};

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
    default:
      return state;
  }
};

export default systemReducer;
