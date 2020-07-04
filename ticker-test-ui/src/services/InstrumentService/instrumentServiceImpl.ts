import { Observable, Observer } from "rxjs";

import { Instrument } from "../../state/types";
import {
  InstrumentRequestMessage,
  InstrumentRequestMessageType
} from "../messages";
import { instrumentSubscribe } from ".";

const subscribe: instrumentSubscribe = (
  webSocket: WebSocket
): Observable<Instrument> =>
  Observable.create((observer: Observer<Instrument>) => {
    console.log("Sub to Instruments");

    webSocket.addEventListener("message", function(evt: MessageEvent) {
      const data = JSON.parse(evt.data);
      if (data.type === "InstrumentResponse") {
        data.instruments.forEach((instrument: Instrument) => {
          observer.next(instrument);
        });
      }
    });

    const req: InstrumentRequestMessage = {
      type: InstrumentRequestMessageType,
      body: {}
    };

    webSocket.send(JSON.stringify(req));
    return () => {
      //do unsub here
    };
  });

export default subscribe;
