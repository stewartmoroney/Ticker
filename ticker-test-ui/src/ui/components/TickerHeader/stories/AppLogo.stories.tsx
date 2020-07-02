import { storiesOf } from "@storybook/react";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { defaultTheme, getTheme } from "../../../shared";
import AppLogo from "./../AppLogo";

const Background = styled.div`
  width: 100%;
  background-color: #394660;
  height: 100%;
`;

const LogoWrapper = styled.div`
  height: 50px;
  width: 50px;
  outline: 1px solid white;
`;

storiesOf("AppLogo", module).add("Header", () => (
  <Background>
    <ThemeProvider theme={getTheme(defaultTheme)}>
      <LogoWrapper>
        <AppLogo />
      </LogoWrapper>
    </ThemeProvider>
  </Background>
));
