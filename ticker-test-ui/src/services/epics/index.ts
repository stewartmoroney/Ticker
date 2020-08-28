import { connectionStatusEpic } from "./connectionStatusEpic";
import { sendInstrumentSubscribeEpic } from "./subscribeInstrumentsEpic";

export default [connectionStatusEpic, sendInstrumentSubscribeEpic];
