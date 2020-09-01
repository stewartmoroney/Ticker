import { delay, retryWhen, tap } from "rxjs/operators";

import { websocket } from "./getTransport";

export type Message = any;

const RECONNECT_TIME = 5000;

const getMessages$ = () =>
  websocket.pipe(
    tap(x => {
      console.log("here");
    }),
    retryWhen(errors => errors.pipe(delay(RECONNECT_TIME)))
  );

export const send = (msg: any) => {
  console.log(msg);
  websocket.next(msg);
};

export default getMessages$;
