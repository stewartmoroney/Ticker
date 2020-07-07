import { WS_URL } from "../Constants";

type Handler<T> = (ev: T) => void;

var cachedTransport: Transport | null = null;

const RECONNECT_TIME = 5000;

export const getTransport = (): Transport => {
  if (cachedTransport) return cachedTransport;

  const transport = new Transport(WS_URL);
  transport.start();

  return (cachedTransport = transport);
};

export class Transport {
  private webSocket: WebSocket | null = null;
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  private onMessageHandler!: Handler<MessageEvent>;
  public onMessage(handler: Handler<MessageEvent>) {
    this.onMessageHandler = handler;
  }

  private onOpenHandler!: Handler<Event>;
  public onOpen(handler: Handler<Event>) {
    this.onOpenHandler = handler;
  }

  private onCloseHandler!: Handler<CloseEvent>;
  public onClose(handler: Handler<CloseEvent>) {
    this.onCloseHandler = handler;
  }

  public send(data: string) {
    this.webSocket?.send(data);
  }

  private handleMessage = (event: MessageEvent) => {
    this.onMessageHandler && this.onMessageHandler(event);
  };
  private handleOpen = (event: Event) => {
    this.onOpenHandler && this.onOpenHandler(event);
  };
  private handleClose = (event: CloseEvent) => {
    this.onCloseHandler && this.onCloseHandler(event);
    this.closeRestart();
  };

  public start() {
    this.webSocket = new WebSocket(this.url);
    this.webSocket.addEventListener("message", this.handleMessage);
    this.webSocket.addEventListener("open", this.handleOpen);
    this.webSocket.addEventListener("close", this.handleClose);
  }

  private closeRestart() {
    this.reset();
    setTimeout(() => {
      this.start();
    }, RECONNECT_TIME);
  }

  private reset() {
    this.webSocket?.removeEventListener("message", this.handleMessage);
    this.webSocket?.removeEventListener("open", this.handleOpen);
    this.webSocket?.removeEventListener("close", this.handleClose);
  }
}
