export enum ConnectionStatus {
  DISCONNECTED = 'disconnected',
  CONNECTED = 'connected',
}

export interface Price{
  instrumentId: string;
  value: number;
}

export interface Instrument{
  id: string;
}