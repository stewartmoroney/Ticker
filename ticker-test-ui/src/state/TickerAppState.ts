export default interface TickerAppState {
  tickerStatus: string;
  sessionId: string;
  tickerValue: string;
  userName: string;
  columnDefs: Array<any>;
  rowData: Array<any>;
}