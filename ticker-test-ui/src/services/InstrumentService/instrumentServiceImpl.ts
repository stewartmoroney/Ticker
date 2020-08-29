import { defer } from "rxjs";
import { filter, map, shareReplay, tap } from "rxjs/operators";

import { ConnectionStatus, Instrument } from "../../state/types";
import getConnectionStatus$ from "../getConnectionStatus$";
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

export const instrumentState$ = () =>
  defer(() =>
    subscribe().pipe(
      filter(isInstrumentMessage),
      tap(x => console.log("ins")),
      map(message => message.instruments),
      shareReplay(1)
    )
  );

export const instrumentSubscriptions$ = () =>
  getConnectionStatus$().pipe(
    filter(status => status === ConnectionStatus.CONNECTED),
    tap(() => {
      sendInstrumentSubscription();
    })
  );
