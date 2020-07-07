import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import uuid from "uuid";

import { getTransport } from "../getTransport";
import {
  PriceSubscribeRequestMessage,
  PriceSubscribeRequestMessageType,
  UnsubscribePriceRequestMessage,
  UnsubscribePriceRequestMessageType
} from "../messages";
import subscribe from "../subscribe";
import { priceSubscribe, priceUnsubscribe } from ".";

export const priceSubscribeImpl: priceSubscribe = (
  instrumentId: string
): Observable<boolean> => {
  const correlationId = uuid();
  const transport = getTransport();
  const req: PriceSubscribeRequestMessage = {
    type: PriceSubscribeRequestMessageType,
    body: {
      instrumentId,
      correlationId
    }
  };
  transport.send(JSON.stringify(req));

  const isSubscribeAckMessage = (data: any) =>
    data.type === "SubscribePriceResponse" &&
    data.correlationId === correlationId;

  return subscribe().pipe(
    filter(isSubscribeAckMessage),
    map(message => true)
  );
};

export const priceUnsubscribeImpl: priceUnsubscribe = (
  instrumentId: string
): Observable<boolean> => {
  const correlationId = uuid();
  const transport = getTransport();
  const req: UnsubscribePriceRequestMessage = {
    type: UnsubscribePriceRequestMessageType,
    body: {
      instrumentId,
      correlationId
    }
  };
  transport.send(JSON.stringify(req));

  const isUnSubscribeAckMessage = (data: any) =>
    data.type === "UnsubscribePriceResponse" &&
    data.correlationId === correlationId;

  return subscribe().pipe(
    filter(isUnSubscribeAckMessage),
    map(message => true)
  );
};
