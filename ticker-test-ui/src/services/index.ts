import { instrumentSubscribe } from "./InstrumentService";
import { sendInstrumentSubscription } from "./InstrumentService/instrumentServiceImpl";
import { sendInstrumentSubscriptionMock } from "./InstrumentService/instrumentServiceMock";
import { priceSubscribe, priceUnsubscribe } from "./PriceSubscriptionService";
import {
  priceSubscribeImpl,
  priceUnsubscribeImpl
} from "./PriceSubscriptionService/PriceSubscribeService";

export interface IServices {
  instrumentSubscribe: instrumentSubscribe;
  priceSubscribe: priceSubscribe;
  priceUnsubscribe: priceUnsubscribe;
}

export default (): IServices => {
  if (process.env.REACT_APP_MOCK) {
    return {
      instrumentSubscribe: sendInstrumentSubscriptionMock,
      priceSubscribe: priceSubscribeImpl,
      priceUnsubscribe: priceUnsubscribeImpl
    };
  } else {
    return {
      instrumentSubscribe: sendInstrumentSubscription,
      priceSubscribe: priceSubscribeImpl,
      priceUnsubscribe: priceUnsubscribeImpl
    };
  }
};
