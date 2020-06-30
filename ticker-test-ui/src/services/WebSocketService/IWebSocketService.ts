import { Observable } from "rxjs";
import { IAppAction } from "../redux/actions";

export abstract class IWebSocketService {
    public abstract connect(): Observable<IAppAction>;
    public abstract webSocket(): WebSocket;
}
