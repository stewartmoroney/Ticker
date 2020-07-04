import { instrumentSubscribe } from "./InstrumentService";
import instrumentSubscribeImpl from "./InstrumentService/instrumentServiceImpl";
import instrumentSubscribeMock from "./InstrumentService/instrumentServiceMock";
import { subscribePrices } from "./PriceService";
import subscribePricesImpl from "./PriceService/subscribePricesImpl";
import subscribePricesMock from "./PriceService/subscribePricesMock";
import { priceSubscribe, priceUnsubscribe } from "./PriceSubscriptionService";
import {
  priceSubscribeImpl,
  priceUnsubscribeImpl
} from "./PriceSubscriptionService/PriceSubscribeService";
import { IWebSocketService } from "./WebSocketService/IWebSocketService";
import { WebSocketServiceImpl } from "./WebSocketService/WebSocketServiceImpl";

export interface IServices {
  instrumentSubscribe: instrumentSubscribe;
  priceSubscribe: priceSubscribe;
  priceUnsubscribe: priceUnsubscribe;
  pricesSubscribe: subscribePrices;
  webSocketService: IWebSocketService;
}

export default (): IServices => {
  if (process.env.REACT_APP_MOCK) {
    return {
      instrumentSubscribe: instrumentSubscribeMock,
      pricesSubscribe: subscribePricesMock,
      priceSubscribe: priceSubscribeImpl,
      priceUnsubscribe: priceUnsubscribeImpl,
      webSocketService: new WebSocketServiceImpl()
    };
  } else {
    return {
      instrumentSubscribe: instrumentSubscribeImpl,
      pricesSubscribe: subscribePricesImpl,
      priceSubscribe: priceSubscribeImpl,
      priceUnsubscribe: priceUnsubscribeImpl,
      webSocketService: new WebSocketServiceImpl()
    };
  }
};
