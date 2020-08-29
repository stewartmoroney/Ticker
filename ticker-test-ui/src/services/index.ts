import { instrumentSubscribe } from "./InstrumentService";
import { sendInstrumentSubscription } from "./InstrumentService/instrumentServiceImpl";
import { sendInstrumentSubscriptionMock } from "./InstrumentService/instrumentServiceMock";

export interface IServices {
  instrumentSubscribe: instrumentSubscribe;
}

export default (): IServices => {
  if (process.env.REACT_APP_MOCK) {
    return {
      instrumentSubscribe: sendInstrumentSubscriptionMock
    };
  } else {
    return {
      instrumentSubscribe: sendInstrumentSubscription
    };
  }
};
