import { bind } from "@react-rxjs/core";
import { filter, map, startWith, tap } from "rxjs/operators";

import { ConnectionStatus, Instrument } from "../../state/types";
import { Message, messages$, send } from "../getMessages$";
import { getConnectionStatus$ } from "../getTransport";
import {
  InstrumentRequestMessage,
  InstrumentRequestMessageType
} from "../messages";

type InstrumentResponseMessage = {
  type: "InstrumentResponse";
  instruments: Instrument[];
};

const isInstrumentMessage = (
  data: Message
): data is InstrumentResponseMessage => data.type === "InstrumentResponse";

export const sendInstrumentSubscription = (): void => {
  const req: InstrumentRequestMessage = {
    type: InstrumentRequestMessageType,
    body: {}
  };
  send(req);
};

export const instrumentState$ = messages$.pipe(
  filter(isInstrumentMessage),
  map(message => message.instruments)
);

export const instrumentSubscriptions$ = () =>
  getConnectionStatus$().pipe(
    filter(status => status === ConnectionStatus.CONNECTED),
    tap(() => {
      sendInstrumentSubscription();
    })
  );

export const [useInstruments] = bind(
  instrumentState$.pipe(startWith([] as Instrument[]))
);
