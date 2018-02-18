import { Observer } from 'rxjs';
import TickAction from './redux/TickAction';
import { newTick, dataUpdate,  } from './redux/Actions';

export interface Channel {
  name: string;
  dataHandler: (body: string, observer: Observer<TickAction>) => any;
}

export const defaultChannels = [
{
  name: 'tick',
  dataHandler: (body: string, observer: Observer<TickAction>) => observer.next(newTick(body))
},
{
  name: 'data',
  dataHandler: (body: string, observer: Observer<TickAction>) => observer.next(dataUpdate(body))
}];