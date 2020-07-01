import styled, { ThemeProvider } from 'styled-components';
import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import { createStore } from 'redux'

import Shell from '..';
import { getTheme, defaultTheme } from './../../shared';
import { initialState as systemIntialState } from '../../../services/redux/reducers/systemReducer';
import { initialState as instrumentsIntialState } from '../../../services/redux/reducers/instrumentReducer';
import { initialState as instrumentsPricelState } from '../../../services/redux/reducers/priceReducer';
import { initialState as subscriptionState } from '../../../services/redux/reducers/subscriptionReducer';
import { IAppAction } from '../../../services/redux/actions';
import { GlobalState } from '../../../services/epics/Epics';

const StoryBackground = styled.div`
  background-color: black;
`;

const initialState: GlobalState = {
  instruments: instrumentsIntialState,
  prices: instrumentsPricelState,
  subscriptions: subscriptionState,
  system: {
    ...systemIntialState
  }
}

const appReducer = (state: GlobalState = initialState, action: IAppAction): GlobalState => {
  return state;
}

const store = createStore(appReducer)

storiesOf('shell', module)
  .add('default layout', () => (
    <ThemeProvider theme={getTheme(defaultTheme)}>
      <Provider store={store}>
        <StoryBackground>
          <Shell />
        </StoryBackground>
      </Provider>
    </ThemeProvider>
  ));   
