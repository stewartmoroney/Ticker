import ITickAction from './redux/TickAction';

import { Observer } from 'rxjs';

import { dataUpdate, newTick  } from './redux/Actions';

export interface IChannel {
  name: string;
  dataHandler: (body: string, observer: Observer<ITickAction>) => void;
}

export const defaultChannels = [
  {
    dataHandler: (body: string, observer: Observer<ITickAction>) =>
      observer.next(newTick(body)),
    name: 'tick'
  },
  {
    dataHandler: (body: string, observer: Observer<ITickAction>) =>
      observer.next(dataUpdate(body)),
    name: 'data',
  }
];
