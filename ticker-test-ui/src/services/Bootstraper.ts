import { IInstrumentService } from "./InstrumentService";
import { InstrumentServiceImpl } from "./InstrumentService/InstrumentServiceImpl";
import { InstrumentServiceMock } from "./InstrumentService/InstrumentServiceMock";
import { IPriceService } from "./PriceService";
import { PriceServiceImpl } from "./PriceService/PriceServiceImpl";
import { PriceServiceMock } from "./PriceService/PriceServiceMock";
import { IPriceSubscribeService } from "./PriceSubscriptionService";
import { PriceSubscribeService } from "./PriceSubscriptionService/PriceSubscribeService";
import { IWebSocketService } from "./WebSocketService/IWebSocketService";
import { WebSocketServiceImpl } from "./WebSocketService/WebSocketServiceImpl";

export interface IServices {
  instrumentService: IInstrumentService;
  priceSubscribeService: IPriceSubscribeService;
  priceService: IPriceService;
  webSocketService: IWebSocketService;
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
