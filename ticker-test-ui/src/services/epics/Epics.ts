import { connectEpic } from "./ConnectEpic";
import { subscribeInstrumentsEpic } from "./SubscribeInstrumentsEpic";
import { subscribePriceEpic } from "./SubscribePriceEpic";
import { subscribePricesEpic } from "./SubscribePricesEpic";
import { unsubscribePriceEpic } from "./UnsubscribePriceEpic";

export default [
  connectEpic,
  subscribePricesEpic,
  subscribeInstrumentsEpic,
  subscribePriceEpic,
  unsubscribePriceEpic
];
