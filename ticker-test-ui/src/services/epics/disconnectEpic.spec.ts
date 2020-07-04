import { cold, hot, Scheduler, time } from "jest-marbles";

import { IServices } from "..";
import { connect, disconnected } from "../redux/actions";
import { IWebSocketService } from "../WebSocketService/IWebSocketService";
import { disconnectEpic } from "./disconnectEpic";

const services: IServices = {
  priceUnsubscribe: jest.fn(),
  instrumentSubscribe: jest.fn(),
  priceSubscribe: jest.fn(),
  pricesSubscribe: jest.fn(),
  webSocketService: jest.genMockFromModule<IWebSocketService>(
    "../WebSocketService/IWebSocketService"
  )
};

describe("DisconnectEpic", () => {
  it("should retry CONNECT after DISCONNECT", () => {
    const scheduler = Scheduler.get();
    const action$ = hot("d", {
      d: disconnected()
    }) as any;
    const expected$ = cold("5s c", {
      c: connect()
    });
    const state$ = null as any;
    scheduler.run(helpers => {
      const out$ = disconnectEpic(action$, state$, services);
      expect(out$).toBeObservable(expected$);
    });
  });
});
