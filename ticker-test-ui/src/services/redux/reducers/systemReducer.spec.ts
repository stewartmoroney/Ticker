import { ConnectionStatus } from "../../../state/types";
import { defaultTheme } from "../../../ui/shared";
import { connected, disconnected, toggleTheme } from "../actions";
import systemReducer from "./systemReducer";

describe("systemReducer", () => {
  it("should toggle theme", () => {
    const initialState = {
      connected: false,
      sessionId: "",
      connectionStatus: ConnectionStatus.DISCONNECTED,
      themeName: defaultTheme
    };

    const expectedNewState = {
      connected: false,
      sessionId: "",
      connectionStatus: ConnectionStatus.DISCONNECTED,
      themeName: "light"
    };

    const newState = systemReducer(initialState, toggleTheme());
    expect(newState).toEqual(expectedNewState);
  });

  it("should handle connected", () => {
    const initialState = {
      connected: false,
      sessionId: "",
      connectionStatus: ConnectionStatus.DISCONNECTED,
      themeName: defaultTheme
    };

    const expectedNewState = {
      connected: true,
      sessionId: "",
      connectionStatus: ConnectionStatus.CONNECTED,
      themeName: defaultTheme
    };

    const newState = systemReducer(initialState, connected());
    expect(newState).toEqual(expectedNewState);
  });

  it("should handle disconnected", () => {
    const initialState = {
      connected: true,
      sessionId: "",
      connectionStatus: ConnectionStatus.CONNECTED,
      themeName: defaultTheme
    };

    const expectedNewState = {
      connected: false,
      sessionId: "",
      connectionStatus: ConnectionStatus.DISCONNECTED,
      themeName: defaultTheme
    };

    const newState = systemReducer(initialState, disconnected());
    expect(newState).toEqual(expectedNewState);
  });
});
