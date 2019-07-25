import { ConnectionServiceImpl, ConnectionServiceMock, IConnectionService } from './ConnectionService';
import { ISubscribeService, SubscribeServiceImpl } from './SubscriptionService';
import { SubscribeServiceMock } from './SubscriptionService/SubscribeServiceMock';
import { InstrumentServiceMock } from './InstrumentService/InstrumentServiceMock';
import { IInstrumentService } from './InstrumentService';
import { InstrumentPriceService } from './InstrumentPriceService/InstrumentPriceService';
import { IInstrumentPriceService } from './InstrumentPriceService';

export interface IServices {
  connectionService: IConnectionService;
  subscribeService: ISubscribeService;
  instrumentService: IInstrumentService;
  instrumentPriceService: IInstrumentPriceService;
}

export default class Bootstraper {

  public static services: IServices;

  public static bootstrap() {
    if (process.env.REACT_APP_MOCK) {
      const connectionService = new ConnectionServiceMock();

      this.services = {
        connectionService,
        subscribeService: new SubscribeServiceMock(connectionService),
        instrumentService: new InstrumentServiceMock(),
        instrumentPriceService: new InstrumentPriceService()
      };

    } else {
      const connectionService = new ConnectionServiceImpl();

      this.services = {
        connectionService,
        subscribeService: new SubscribeServiceImpl(connectionService),
        instrumentService: new InstrumentServiceMock(),
        instrumentPriceService: new InstrumentPriceService()
      };
    }
  }
}
