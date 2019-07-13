import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import TickerApp from './ui/TickerApp';

import registerServiceWorker from './registerServiceWorker';

import Services from './services/Services';

import createStore from './services/redux/Store';

const store = createStore();
Services.bootstrap(store.dispatch);

render(
  <Provider store={store}>
    <TickerApp />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
