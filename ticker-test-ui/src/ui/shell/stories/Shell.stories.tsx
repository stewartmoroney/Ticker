import { storiesOf } from "@storybook/react";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Shell from "..";
import { defaultTheme, getTheme } from "./../../shared";

const StoryBackground = styled.div`
  background-color: black;
`;

storiesOf("shell", module).add("default layout", () => (
  <ThemeProvider theme={getTheme(defaultTheme)}>
    <StoryBackground>
      <Shell />
    </StoryBackground>
  </ThemeProvider>
));
