import { ThemeProvider } from 'styled-components';
import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import { combineReducers, createStore } from 'redux'

import Shell from '..';
import { getTheme } from './../../shared';
import { initialState as dataInitialState } from '../../../services/redux/reducers/dataReducer';
import { initialState as systemIntialState } from '../../../services/redux/reducers/systemReducer';
import { IAppAction } from '../../../services/redux/Actions';
import { GlobalState } from '../../../services/epics/Epics';

const initialState: GlobalState = {
  data: dataInitialState,
  system: systemIntialState
}

const appReducer = (state: GlobalState = initialState, action: IAppAction): GlobalState => {
  return state;
}

const store = createStore(appReducer)

storiesOf('shell', module)
  .add('default layout', () => (
    <ThemeProvider theme={getTheme()}>
      <Provider store={store}>
        <Shell />
      </Provider>
    </ThemeProvider>
  ));   
