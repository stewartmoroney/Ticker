import { ConnectionServiceImpl, ConnectionServiceMock, IConnectionService } from './ConnectionService';
import { ISubscribeService, SubscribeServiceImpl } from './SubscriptionService';
import { SubscribeServiceMock } from './SubscriptionService/SubscribeServiceMock';
import { InstrumentServiceMock } from './InstrumentService/InstrumentServiceMock';
import { IInstrumentService } from './InstrumentService';
import { PriceSubscribeService } from './PriceSubscriptionService/PriceSubscribeService';
import { IPriceSubscribeService } from './PriceSubscriptionService';
import { IWebSocketService } from './WebSocketService/IWebSocketService';
import { WebSocketServiceImpl } from './WebSocketService/WebSocketServiceImpl';
import { InstrumentServiceImpl } from './InstrumentService/InstrumentServiceImpl';
import { IPriceService } from './PriceService';
import { PriceServiceMock } from './PriceService/PriceServiceMock';

export interface IServices {
  connectionService: IConnectionService;
  instrumentService: IInstrumentService;
  priceSubscribeService: IPriceSubscribeService;
  priceService: IPriceService;
  subscribeService: ISubscribeService;
  webSocketService: IWebSocketService
}

export default class Bootstraper {

  public static services: IServices;

  public static bootstrap() {
    if (process.env.REACT_APP_MOCK) {
      const connectionService = new ConnectionServiceMock();

      this.services = {
        connectionService,
        instrumentService: new InstrumentServiceMock(),
        priceSubscribeService: new PriceSubscribeService(),
        priceService: new PriceServiceMock(),
        subscribeService: new SubscribeServiceMock(connectionService),
        webSocketService: new WebSocketServiceImpl()
      };

    } else {
      const connectionService = new ConnectionServiceImpl();

      this.services = {
        connectionService,
        instrumentService: new InstrumentServiceImpl(),
        priceSubscribeService: new PriceSubscribeService(),
        priceService: new PriceServiceMock(),
        subscribeService: new SubscribeServiceImpl(connectionService),
        webSocketService: new WebSocketServiceImpl()
      };
    }
  }
}
