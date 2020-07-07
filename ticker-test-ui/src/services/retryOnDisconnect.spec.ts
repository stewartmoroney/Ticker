import { cold, hot } from "jest-marbles";

import { ConnectionStatus } from "../state/types";
import getConnectionStatus$ from "./getConnectionStatus$";
import retryOnDisconnect from "./retryOnDisconnect";

jest.mock("./getConnectionStatus$");

describe("retryOnDisconnect", () => {
  const mockGetConnectionStatus$ = getConnectionStatus$ as jest.Mock;
  const marbleValues = {
    c: ConnectionStatus.CONNECTED,
    d: ConnectionStatus.DISCONNECTED
  };

  it("should subscribe on connect", () => {
    const connectionStatus$ = hot("d--c", marbleValues);
    mockGetConnectionStatus$.mockReturnValue(connectionStatus$);
    const source$ = cold("a-|");
    expect(source$.pipe(retryOnDisconnect)).toBeMarble("---a");
  });

  it("should re-subscribe on re-connect", () => {
    const connectionStatus$ = hot("d--c--d--c---", marbleValues);
    mockGetConnectionStatus$.mockReturnValue(connectionStatus$);
    const source$ = cold("a|");
    expect(source$.pipe(retryOnDisconnect)).toBeMarble("---a-----a");
    expect(source$).toHaveSubscriptions([
      // subscription from initial connection to disconnect
      "---^!",
      // subscription from re-connection until end
      "---------^!"
    ]);
  });
});
