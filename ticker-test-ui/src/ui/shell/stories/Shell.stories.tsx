import { storiesOf } from "@storybook/react";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import styled, { ThemeProvider } from "styled-components";

import Shell from "..";
import { IAppAction } from "../../../services/redux/actions";
import { GlobalState } from "../../../services/redux/GlobalState";
import { initialState as instrumentsIntialState } from "../../../services/redux/reducers/instrumentReducer";
import { initialState as instrumentsPricelState } from "../../../services/redux/reducers/priceReducer";
import { initialState as subscriptionState } from "../../../services/redux/reducers/subscriptionReducer";
import { initialState as systemIntialState } from "../../../services/redux/reducers/systemReducer";
import { defaultTheme, getTheme } from "./../../shared";

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
};

const appReducer = (
  state: GlobalState = initialState,
  action: IAppAction
): GlobalState => state;

const store = createStore(appReducer);

storiesOf("shell", module).add("default layout", () => (
  <ThemeProvider theme={getTheme(defaultTheme)}>
    <Provider store={store}>
      <StoryBackground>
        <Shell />
      </StoryBackground>
    </Provider>
  </ThemeProvider>
));
