export default interface TickerAppState {
  connected: boolean;
  subscribed: boolean;
  tickerStatus: string;
  sessionId: string;
  tickerValue: string;
  userName: string;
  columnDefs: Array<any>;
  rowData: Array<any>;
}