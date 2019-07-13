export default interface ITickerAppState {
  connected: boolean;
  subscribed: boolean;
  tickerStatus: string;
  sessionId: string;
  tickerValue: string;
  columnDefs: any[];
  rowData: any[];
}
