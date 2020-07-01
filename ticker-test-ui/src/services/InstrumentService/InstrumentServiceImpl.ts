import { IInstrumentService } from ".";
import { Observable, Observer } from "rxjs";
import { Instrument } from "../../state/types";
import { InstrumentRequestMessage, InstrumentRequestMessageType } from "../messages";

export class InstrumentServiceImpl implements IInstrumentService {
  public subscribe = (webSocket: WebSocket): Observable<Instrument> => {
    return Observable.create((observer: Observer<Instrument>) => {

      console.log('Sub to Instruments');

      webSocket.addEventListener("message", function (evt: MessageEvent) {
        const data = JSON.parse(evt.data);
        console.log('mesage arrived - ' + data);
        if(data.type === 'InstrumentResponse') {
          data.instruments.forEach((instrument: Instrument) => {
            observer.next(instrument);
          });
        }
      })      

      const req : InstrumentRequestMessage = 
      {
          type: InstrumentRequestMessageType,
          body: 
          {
              uid: 'myUid'
          }
      };

      webSocket.send(JSON.stringify(req));
      return () => {
        //do unsub here
      };
    }); 
  }
};