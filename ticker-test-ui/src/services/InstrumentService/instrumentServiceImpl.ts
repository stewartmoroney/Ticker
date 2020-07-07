import { filter, mergeMap } from "rxjs/operators";

import { Instrument } from "../../state/types";
import { Message } from "../getMessages$";
import { getTransport } from "../getTransport";
import {
  InstrumentRequestMessage,
  InstrumentRequestMessageType
} from "../messages";
import subscribe from "./../subscribe";

type InstrumentResponseMessage = {
  type: "InstrumentResponse";
  instruments: Instrument[];
};

const isInstrumentMessage = (
  data: Message
): data is InstrumentResponseMessage => data.type === "InstrumentResponse";

export const sendInstrumentSubscription = (): void => {
  const transport = getTransport();
  const req: InstrumentRequestMessage = {
    type: InstrumentRequestMessageType,
    body: {}
  };

  transport.send(JSON.stringify(req));
};

export const subscribedInstrumentsImpl = () =>
  subscribe().pipe(
    filter(isInstrumentMessage),
    mergeMap(message => message.instruments)
  );
