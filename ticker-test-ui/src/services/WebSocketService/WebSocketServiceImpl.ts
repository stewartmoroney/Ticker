import { Observable } from "rxjs";
import { IWebSocketService } from "./IWebSocketService";
import { connected, IAppAction } from "../redux/actions";
import { WS_URL } from "../../Constants";

export class WebSocketServiceImpl extends IWebSocketService {
    private ws!: WebSocket;

    connect(): Observable<IAppAction> {
        return new Observable<IAppAction>(observer => {
            this.ws = new WebSocket(WS_URL);    
            this.ws.onopen = (evt: Event) => {
                observer.next(connected());
                observer.complete();
            };    
          });
    }
    webSocket(): WebSocket {
        return this.ws;
    }
}
