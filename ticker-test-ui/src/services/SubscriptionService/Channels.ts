import { IAppAction } from '../redux/Actions';

import { Observer } from 'rxjs';

import { dataUpdate, newTick  } from '../redux/Actions';

export enum ChannelName {
  TICK = 'tick',
  DATA = 'data',
}

export interface IChannel {
  name: ChannelName;
  dataHandler: (body: string, observer: Observer<IAppAction>) => void;
}

export const defaultChannels = [
  {
    dataHandler: (body: string, observer: Observer<IAppAction>) =>
      observer.next(newTick(body)),
    name: ChannelName.TICK
  },
  {
    dataHandler: (body: string, observer: Observer<IAppAction>) =>
      observer.next(dataUpdate(body)),
    name: ChannelName.DATA,
  }
];
