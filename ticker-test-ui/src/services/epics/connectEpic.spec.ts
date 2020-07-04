import { cold, hot } from "jest-marbles";

import { IServices } from "..";
import { connect, connected } from "../redux/actions";
import { IWebSocketService } from "../WebSocketService/IWebSocketService";
import { connectEpic } from "./connectEpic";

describe("ConnectEpic", () => {
  it("should connect web socket service on ActionTypes.CONNECT", () => {
    const action$ = cold("c---", {
      c: connect()
    }) as any;

    const mockConnect = jest.fn();
    const connection$ = cold("--c-", {
      c: connected()
    });

    mockConnect.mockReturnValue(connection$);

    const mockWebSocketService: IWebSocketService = jest.genMockFromModule<
      IWebSocketService
    >("../WebSocketService/IWebSocketService");
    mockWebSocketService.connect = mockConnect;

    const services: IServices = {
      priceUnsubscribe: jest.fn(),
      instrumentSubscribe: jest.fn(),
      priceSubscribe: jest.fn(),
      pricesSubscribe: jest.fn(),
      webSocketService: mockWebSocketService
    };

    const state$ = null as any;
    const out$ = connectEpic(action$, state$, services);
    expect(out$).toSatisfyOnFlush(() => {
      expect(out$).toBeObservable(connection$);
      expect(mockConnect.mock.calls.length).toBe(1);
    });
  });
});
