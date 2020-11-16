import { bind } from "@react-rxjs/core";
import { delay, retryWhen } from "rxjs/operators";

import logger from "../util/logger";
import { websocket } from "./getTransport";

export type Message = any;

const RECONNECT_TIME = 5000;

const getMessages$ = () =>
  websocket.pipe(retryWhen(errors => errors.pipe(delay(RECONNECT_TIME))));

export const [useMessages, messages$] = bind(getMessages$());

export const send = (msg: any) => {
  logger.info(`sending - ${JSON.stringify(msg)}`);
  websocket.next(msg);
};

messages$.subscribe(msg => {
  logger.info(`new msg - ${JSON.stringify(msg)}`);
});
