import styled, { ThemeProvider } from 'styled-components';
import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import { createStore } from 'redux'

import Shell from '..';
import { getTheme } from './../../shared';
import { initialState as dataInitialState } from '../../../services/redux/reducers/dataReducer';
import { initialState as systemIntialState } from '../../../services/redux/reducers/systemReducer';
import { initialState as instrumentsIntialState } from '../../../services/redux/reducers/instrumentReducer';
import { initialState as instrumentsPricelState } from '../../../services/redux/reducers/priceReducer';
import { IAppAction } from '../../../services/redux/actions';
import { GlobalState } from '../../../services/epics/Epics';
import uuid from 'uuid';

const StoryBackground = styled.div`
  background-color: black;
`;

const initialState: GlobalState = {
  data: dataInitialState,
  instruments: instrumentsIntialState,
  prices: instrumentsPricelState,
  system: {
    ...systemIntialState,
    sessionId: uuid()
  }
}

const appReducer = (state: GlobalState = initialState, action: IAppAction): GlobalState => {
  return state;
}

const store = createStore(appReducer)

storiesOf('shell', module)
  .add('default layout', () => (
    <ThemeProvider theme={getTheme()}>
      <Provider store={store}>
        <StoryBackground>
          <Shell />
        </StoryBackground>
      </Provider>
    </ThemeProvider>
  ));   
