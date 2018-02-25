import * as IOC from 'eye-oh-see';
import { Store, Dispatch } from 'redux';

import TickAction from './../services/redux/TickAction';
import { connect } from './redux/Actions';
import TickerAppState from './../state/TickerAppState';

import { ConnectionService, ConnectionServiceImpl } from './ConnectionService';
import { SubscribeService, SubscribeServiceImpl } from './SubscribeService';

export default class Services {
  private static container: IOC.Container;

  public static bootstrap(dispatch: Dispatch<TickAction>) {
    Services.container = new IOC.Container();
    Services.container.register(ConnectionService);
    Services.container.register(ConnectionServiceImpl);

    Services.container.register(SubscribeService);
    Services.container.register(SubscribeServiceImpl);
    dispatch(connect());
  }

  static connectionService(): ConnectionService {
    return Services.container.resolve(ConnectionServiceImpl);
  }

  static subscribeService(): SubscribeService {
    return Services.container.resolve(SubscribeServiceImpl);
  }
}
