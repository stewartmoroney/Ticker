import { cold, hot, Scheduler, time } from "jest-marbles";

import { connect, disconnected } from "../redux/actions";
import { IWebSocketService } from "../WebSocketService/IWebSocketService";
import { IInstrumentService } from "./../InstrumentService";
import { IPriceService } from "./../PriceService";
import { IPriceSubscribeService } from "./../PriceSubscriptionService";
import { disconnectEpic } from "./DisconnectedEpic";

const services = {
  instrumentService: jest.genMockFromModule<IInstrumentService>(
    "../instrumentService"
  ),
  priceSubscribeService: jest.genMockFromModule<IPriceSubscribeService>(
    "../PriceSubscriptionService"
  ),
  priceService: jest.genMockFromModule<IPriceService>("../PriceService"),
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
