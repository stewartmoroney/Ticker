import { cold, hot } from "jest-marbles";

import { ConnectionStatus } from "../state/types";
import getConnectionStatus$ from "./getConnectionStatus$";
import waitUntilConnected from "./waitUntilConnected";

jest.mock("./getConnectionStatus$");

describe("services/waitUntilConnected", () => {
  const mockGetConnectionStatus$ = getConnectionStatus$ as jest.Mock;
  const marbleValues = {
    c: ConnectionStatus.CONNECTED,
    d: ConnectionStatus.DISCONNECTED
  };

  test("subscribes to target observable on connected", () => {
    const connection$ = hot("d--c--d", marbleValues);
    mockGetConnectionStatus$.mockReturnValue(connection$);
    const target$ = cold("a-----|");
    expect(target$.pipe(waitUntilConnected)).toBeMarble("---a-----|");
    expect(target$).toHaveSubscriptions("---^-----!");
  });
});
