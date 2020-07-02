import { InstrumentServiceMock } from './InstrumentService/InstrumentServiceMock';
import { IInstrumentService } from './InstrumentService';
import { PriceSubscribeService } from './PriceSubscriptionService/PriceSubscribeService';
import { IPriceSubscribeService } from './PriceSubscriptionService';
import { IWebSocketService } from './WebSocketService/IWebSocketService';
import { WebSocketServiceImpl } from './WebSocketService/WebSocketServiceImpl';
import { InstrumentServiceImpl } from './InstrumentService/InstrumentServiceImpl';
import { IPriceService } from './PriceService';
import { PriceServiceMock } from './PriceService/PriceServiceMock';
import { PriceServiceImpl } from './PriceService/PriceServiceImpl';

export interface IServices {
  instrumentService: IInstrumentService;
  priceSubscribeService: IPriceSubscribeService;
  priceService: IPriceService;
  webSocketService: IWebSocketService
}

export default class Bootstraper {

  public static services: IServices;

  public static bootstrap() {
    if (process.env.REACT_APP_MOCK) {
      this.services = {
        instrumentService: new InstrumentServiceMock(),
        priceSubscribeService: new PriceSubscribeService(),
        priceService: new PriceServiceMock(),
        webSocketService: new WebSocketServiceImpl()
      };

    } else {
      this.services = {
        instrumentService: new InstrumentServiceImpl(),
        priceSubscribeService: new PriceSubscribeService(),
        priceService: new PriceServiceImpl(),
        webSocketService: new WebSocketServiceImpl()
      };
    }
  }
}
