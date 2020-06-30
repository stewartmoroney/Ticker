export interface Request {
    type: string;
    body: MessageBody;
}

type MessageBody  = InstrumentRequest | InstrumentPriceRequest;

interface InstrumentRequest {
    uid: String;
}

export const InstrumentRequestMessageType = 'InstrumentRequest';
export type InstrumentRequestMessage = {
    type: typeof InstrumentRequestMessageType;
    body: InstrumentRequest;
}

interface InstrumentPriceRequest {
    instrumentId: String;
}

export const InstrumentPriceRequestMessageType = 'InstrumentPriceRequest';
export type InstrumentPriceRequestMessage = {
    type: typeof InstrumentPriceRequestMessageType;
    body: InstrumentPriceRequest;
}


interface UnsubscribeInstrumentPriceRequest {
    instrumentId: String;
}

export const UnsubscribeInstrumentPriceRequestMessageType = 'UnsubscribeInstrumentPriceRequest';
export type UnsubscribeInstrumentPriceRequestMessage = {
    type: typeof UnsubscribeInstrumentPriceRequestMessageType;
    body: UnsubscribeInstrumentPriceRequest;
}
