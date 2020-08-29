import { storiesOf } from "@storybook/react";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import styled, { ThemeProvider } from "styled-components";

import Shell from "..";
import { IAppAction } from "../../../services/redux/actions";
import { defaultTheme, getTheme } from "./../../shared";

const StoryBackground = styled.div`
  background-color: black;
`;
const appReducer = (state = {}, action: IAppAction): {} => state;

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
