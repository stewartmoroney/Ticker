import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import Shell from './ui/shell';

import registerServiceWorker from './registerServiceWorker';

import Bootstraper from './services/Bootstraper';

import { connect } from './services/redux/actions';
import createStore from './services/redux/Store';
import { getTheme } from './ui/shared';

Bootstraper.bootstrap();
const store = createStore();
store.dispatch(connect());

render(
  <ThemeProvider theme={getTheme()}>
    <Provider store={store}>
      <Shell />
    </Provider>
  </ThemeProvider>
,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
