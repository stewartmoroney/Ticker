import {
  instrumentSubscribe,
  subscribedInstruments
} from "./InstrumentService";
import {
  sendInstrumentSubscription,
  subscribedInstrumentsImpl
} from "./InstrumentService/instrumentServiceImpl";
import {
  sendInstrumentSubscriptionMock,
  subscribedInstrumentsMock
} from "./InstrumentService/instrumentServiceMock";
import { subscribedPrices } from "./PriceService";
import subscribedPricesImpl from "./PriceService/subscribedPricesImpl";
import subscribedPricesMock from "./PriceService/subscribedPricesMock";
import { priceSubscribe, priceUnsubscribe } from "./PriceSubscriptionService";
import {
  priceSubscribeImpl,
  priceUnsubscribeImpl
} from "./PriceSubscriptionService/PriceSubscribeService";

export interface IServices {
  instrumentSubscribe: instrumentSubscribe;
  priceSubscribe: priceSubscribe;
  priceUnsubscribe: priceUnsubscribe;
  subscribedPrices: subscribedPrices;
  subscribedInstruments: subscribedInstruments;
}

export default (): IServices => {
  if (process.env.REACT_APP_MOCK) {
    return {
      instrumentSubscribe: sendInstrumentSubscriptionMock,
      priceSubscribe: priceSubscribeImpl,
      priceUnsubscribe: priceUnsubscribeImpl,
      subscribedPrices: subscribedPricesMock,
      subscribedInstruments: subscribedInstrumentsMock
    };
  } else {
    return {
      instrumentSubscribe: sendInstrumentSubscription,
      priceSubscribe: priceSubscribeImpl,
      priceUnsubscribe: priceUnsubscribeImpl,
      subscribedPrices: subscribedPricesImpl,
      subscribedInstruments: subscribedInstrumentsImpl
    };
  }
};
