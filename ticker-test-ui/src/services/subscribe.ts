import { Observable } from "rxjs";

import getMessages$, { Message } from "./getMessages$";
import retryOnDisconnect from "./retryOnDisconnect";

const subscribe = (): Observable<Message> =>
  new Observable<Message>(observer => {
    const subscription = getMessages$().subscribe(message =>
      observer.next(message)
    );
    return () => {
      subscription.unsubscribe();
    };
  }).pipe(retryOnDisconnect);

export default subscribe;
