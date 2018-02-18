import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import TickerApp from './ui/TickerApp';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Services from './services/Services';
import Store from './services/redux/Store';

Services.bootstrap();

render(
  <Provider store={Store}>
    <TickerApp/>
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
