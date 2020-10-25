import { bind, shareLatest } from "@react-rxjs/core";
import { defer } from "rxjs";
import { filter, map, startWith, tap } from "rxjs/operators";

import { ConnectionStatus, Instrument } from "../../state/types";
import getMessages$, { Message, send } from "../getMessages$";
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

export const instrumentState$ = () =>
  defer(() =>
    getMessages$().pipe(
      filter(isInstrumentMessage),
      map(message => message.instruments),
      shareLatest()
    )
  );

export const instrumentSubscriptions$ = () =>
  getConnectionStatus$().pipe(
    filter(status => status === ConnectionStatus.CONNECTED),
    tap(() => {
      sendInstrumentSubscription();
    })
  );

export const [useInstruments] = bind(
  instrumentState$().pipe(startWith([] as Instrument[]))
);
