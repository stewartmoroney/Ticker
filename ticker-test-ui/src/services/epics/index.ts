import { connectEpic } from "./connectEpic";
import { disconnectEpic } from "./disconnectEpic";
import { subscribeInstrumentsEpic } from "./subscribeInstrumentsEpic";
import { subscribePriceEpic } from "./subscribePriceEpic";
import { subscribePricesEpic } from "./subscribePricesEpic";
import { unsubscribePriceEpic } from "./unsubscribePriceEpic";

export default [
  connectEpic,
  disconnectEpic,
  subscribePricesEpic,
  subscribeInstrumentsEpic,
  subscribePriceEpic,
  unsubscribePriceEpic
];
