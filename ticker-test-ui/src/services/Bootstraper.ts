import { ConnectionServiceImpl, ConnectionServiceMock, IConnectionService } from './ConnectionService';
import { ISubscribeService, SubscribeServiceImpl } from './SubscriptionService';
import { SubscribeServiceMock } from './SubscriptionService/SubscribeServiceMock';

export interface IServices {
  connectionService: IConnectionService;
  subscribeService: ISubscribeService;
}

export default class Bootstraper {

  public static services: IServices;

  public static bootstrap() {
    if (process.env.REACT_APP_MOCK) {
      const connectionService = new ConnectionServiceMock();

      this.services = {
        connectionService,
        subscribeService: new SubscribeServiceMock(connectionService)
      };

    } else {
      const connectionService = new ConnectionServiceImpl();

      this.services = {
        connectionService,
        subscribeService: new SubscribeServiceImpl(connectionService)
      };
    }
  }
}
