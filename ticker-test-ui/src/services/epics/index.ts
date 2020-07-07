import { connectionStatusEpic } from "./connectionStatusEpic";
import {
  sendInstrumentSubscribeEpic,
  subscribeInstrumentsEpic
} from "./subscribeInstrumentsEpic";
import { subscribePriceEpic } from "./subscribePriceEpic";
import { subscribePricesEpic } from "./subscribePricesEpic";
import { unsubscribePriceEpic } from "./unsubscribePriceEpic";

export default [
  connectionStatusEpic,
  subscribePricesEpic,
  sendInstrumentSubscribeEpic,
  subscribeInstrumentsEpic,
  subscribePriceEpic,
  unsubscribePriceEpic
];
