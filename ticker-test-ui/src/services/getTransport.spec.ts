import { Server } from "mock-socket";

import { WS_URL } from "../Constants";
import { Transport } from "./getTransport";

describe("getTransport", () => {
  describe("connect", () => {
    let mockServer: Server;
    it("should connect and handle connection", done => {
      mockServer = new Server(WS_URL);
      const transport = new Transport(WS_URL);
      var serverGotConnection = false;

      transport.onOpen((e: Event) => {
        setTimeout(() => {
          serverGotConnection && done();
        }, 100);
      });
      mockServer.on("connection", socket => {
        serverGotConnection = true;
      });
      transport.start();
    });
    afterAll(() => {
      mockServer.close();
    });
  });

  describe("re-connect", () => {
    let mockServer1: Server;
    let mockServer2: Server;

    jest.setTimeout(60000);

    it("should re-connect after 5 seconds of disconnection", done => {
      mockServer1 = new Server(WS_URL);
      const transport = new Transport(WS_URL);
      const messages = ["message1", "message2"];

      transport.onMessage((e: MessageEvent) => {
        if (e.data === messages[0]) {
          mockServer1.close();
        } else if (e.data === messages[1]) {
          done();
        }
      });

      transport.onClose((e: CloseEvent) => {
        mockServer2 = new Server(WS_URL);
        mockServer2.on("connection", socket => {
          socket.send(messages[1]);
        });
      });

      mockServer1.on("connection", socket => {
        socket.send(messages[0]);
      });
      transport.start();
    });
    afterAll(() => {
      mockServer1.close();
      mockServer2.close();
    });
  });
});
