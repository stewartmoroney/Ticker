import { cold, hot } from "jest-marbles";

import { connect, connected } from "../redux/actions";
import { IWebSocketService } from "../WebSocketService/IWebSocketService";
import { IInstrumentService } from "./../InstrumentService";
import { IPriceService } from "./../PriceService";
import { IPriceSubscribeService } from "./../PriceSubscriptionService";
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

    const services = {
      instrumentService: jest.genMockFromModule<IInstrumentService>(
        "../instrumentService"
      ),
      priceSubscribeService: jest.genMockFromModule<IPriceSubscribeService>(
        "../PriceSubscriptionService"
      ),
      priceService: jest.genMockFromModule<IPriceService>("../PriceService"),
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
