import { Observable } from "rxjs";
import { share } from "rxjs/operators";

import { getTransport } from "./getTransport";

export type Message = any;

let cachedMessages$: Observable<Message> | null = null;

const getMessages$ = (): Observable<Message> => {
  if (cachedMessages$) {
    return cachedMessages$;
  }
  const transport = getTransport();
  const messages$ = new Observable<Message>(observer => {
    const unsubscribe = transport.onMessage((evt: MessageEvent) => {
      const data = JSON.parse(evt.data);
      observer.next(data);
    });
    return unsubscribe;
  }).pipe(share());
  return (cachedMessages$ = messages$);
};

export default getMessages$;
