import { useSubscribe } from "@react-rxjs/core";
import React, { FC, useRef, useState } from "react";
import { usePopper } from "react-popper";
import styled, { ThemeProvider } from "styled-components";

import { instrumentSubscriptions$ } from "../../services/InstrumentService/instrumentServiceImpl";
import { instrumentPriceSubscriptions$ } from "../../services/PriceSubscriptionService/PriceSubscribeService";
import { useTheme } from "../../services/themeService";
import AppStatusBar from "../components/AppStatusBar";
import Grid from "../components/DataGrid";
import InstrumentSelector from "../components/InstrumentSelector";
import Notifications from "../components/Notifications";
import AppHeader from "../components/TickerHeader";
import { getTheme } from "./../shared";

const MainPanel = styled.div`
  width: 100%;
  display: grid;
  background-color: ${props => props.theme.body.background};
  grid-template-rows: auto auto auto auto auto auto;
  grid-row-gap: 4px;
  color: ${props => props.theme.bodyText};
`;

const Shell: FC = () => {
  const themeName = useTheme();
  useSubscribe(instrumentSubscriptions$());
  useSubscribe(instrumentPriceSubscriptions$());
  const mainRef = useRef(null);
  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <MainPanel ref={mainRef}>
        <AppHeader />
        <InstrumentSelector />
        <Grid />
        <AppStatusBar />
        <Notifications ref={mainRef} notifications={["hey there"]} />
      </MainPanel>
    </ThemeProvider>
  );
};

export default Shell;
