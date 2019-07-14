import { ConnectionStatus } from './types';

export default interface ITickerAppState {
  connected: boolean;
  subscribed: boolean;
  connectionStatus: ConnectionStatus;
  sessionId: string;
  tickerValue: string;
  columnDefs: any[];
  rowData: any[];
}
