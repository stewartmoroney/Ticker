import { connectionStatusEpic } from "./connectionStatusEpic";
import { sendInstrumentSubscribeEpic } from "./subscribeInstrumentsEpic";
import { subscribePriceEpic } from "./subscribePriceEpic";
import { unsubscribePriceEpic } from "./unsubscribePriceEpic";

export default [
  connectionStatusEpic,
  sendInstrumentSubscribeEpic,
  subscribePriceEpic,
  unsubscribePriceEpic
];
