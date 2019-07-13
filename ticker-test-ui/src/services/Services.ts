import * as IOC from 'eye-oh-see';
import { Dispatch, Store } from 'redux';

import { connect } from './redux/Actions';

import ITickAction from './../services/redux/TickAction';

import ITickerAppState from './../state/TickerAppState';

import { ConnectionService, ConnectionServiceImpl } from './ConnectionService';
import { SubscribeService, SubscribeServiceImpl } from './SubscribeService';

export default class Services {
  public static bootstrap(dispatch: Dispatch<ITickAction>) {
    Services.container = new IOC.Container();
    Services.container.register(ConnectionService);
    Services.container.register(ConnectionServiceImpl);

    Services.container.register(SubscribeService);
    Services.container.register(SubscribeServiceImpl);
    dispatch(connect());
  }

  public static connectionService(): ConnectionService {
    return Services.container.resolve(ConnectionServiceImpl);
  }

  public static subscribeService(): SubscribeService {
    return Services.container.resolve(SubscribeServiceImpl);
  }

  private static container: IOC.Container;
}
