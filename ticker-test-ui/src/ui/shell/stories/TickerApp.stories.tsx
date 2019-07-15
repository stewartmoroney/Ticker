import { ThemeProvider } from 'styled-components';
import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import { combineReducers, createStore } from 'redux'

import TickerApp from '../TickerApp';
import { getTheme } from './../../shared';
import { initialState } from '../../../services/redux/Reducer';
import ITickerAppState from '../../../state/TickerAppState';
import ITickAction from '../../../services/redux/TickAction';

const theme = getTheme();

const appReducer = (state: ITickerAppState = initialState, action: ITickAction): ITickerAppState => {
  return state;
}

const store = createStore(combineReducers({
  app: appReducer
}))

storiesOf('shell', module)
  .add('default layout', () => (
    <ThemeProvider theme={getTheme()}>
      <Provider store={store}>
        <TickerApp />
      </Provider>
    </ThemeProvider>
  ));   
