export interface Request {
    type: string;
    body: MessageBody;
}

type MessageBody  = InstrumentRequest | SubscribePriceRequest;

interface InstrumentRequest {
    uid: String;
}

export const InstrumentRequestMessageType = 'InstrumentRequest';
export type InstrumentRequestMessage = {
    type: typeof InstrumentRequestMessageType;
    body: InstrumentRequest;
}

interface SubscribePriceRequest {
    instrumentId: String;
}

export const PriceSubscribeRequestMessageType = 'SubscribePriceRequest';
export type PriceSubscribeRequestMessage = {
    type: typeof PriceSubscribeRequestMessageType;
    body: SubscribePriceRequest;
}


interface UnsubscribeInstrumentPriceRequest {
    instrumentId: String;
}

export const UnsubscribePriceRequestMessageType = 'UnsubscribePriceRequest';
export type UnsubscribePriceRequestMessage = {
    type: typeof UnsubscribePriceRequestMessageType;
    body: UnsubscribeInstrumentPriceRequest;
}
