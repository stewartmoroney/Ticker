export interface Request {
  type: string;
  body: MessageBody;
}

type MessageBody = InstrumentRequest | SubscribePriceRequest;

interface InstrumentRequest {}

export const InstrumentRequestMessageType = "InstrumentRequest";
export type InstrumentRequestMessage = {
  type: typeof InstrumentRequestMessageType;
  body: InstrumentRequest;
};

interface SubscribePriceRequest {
  correlationId: string;
  instrumentId: string;
}

export const PriceSubscribeRequestMessageType = "SubscribePriceRequest";
export type PriceSubscribeRequestMessage = {
  type: typeof PriceSubscribeRequestMessageType;
  body: SubscribePriceRequest;
};

interface UnsubscribeInstrumentPriceRequest {
  correlationId: string;
  instrumentId: string;
}

export const UnsubscribePriceRequestMessageType = "UnsubscribePriceRequest";
export type UnsubscribePriceRequestMessage = {
  type: typeof UnsubscribePriceRequestMessageType;
  body: UnsubscribeInstrumentPriceRequest;
};
