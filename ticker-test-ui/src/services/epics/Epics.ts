import { connectEpic } from "./ConnectEpic";
import { disconnectEpic } from "./DisconnectedEpic";
import { subscribeInstrumentsEpic } from "./SubscribeInstrumentsEpic";
import { subscribePriceEpic } from "./SubscribePriceEpic";
import { subscribePricesEpic } from "./SubscribePricesEpic";
import { unsubscribePriceEpic } from "./UnsubscribePriceEpic";

export default [
  connectEpic,
  disconnectEpic,
  subscribePricesEpic,
  subscribeInstrumentsEpic,
  subscribePriceEpic,
  unsubscribePriceEpic
];
