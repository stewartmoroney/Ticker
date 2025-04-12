import { Subscribe } from "@react-rxjs/core";
import { FC } from "react";
import styled from "styled-components";
import { merge } from "rxjs";

import { instrumentSubscriptions$ } from "../../services/InstrumentService/instrumentServiceImpl";
import { instrumentPriceSubscriptions$ } from "../../services/PriceSubscriptionService/PriceSubscribeService";
import AppStatusBar from "../components/AppStatusBar";
import Grid from "../components/DataGrid";
import InstrumentSelector from "../components/InstrumentSelector";
import AppHeader from "../components/TickerHeader";
import ThemeWrapper from "./themeWrapper";
import { Theme } from "../shared";

const MainPanel = styled.div<{theme: Theme}>`
  width: 100%;
  display: grid;
  background-color: ${props => props.theme.body.background};
  grid-template-rows: auto auto auto auto auto auto;
  grid-row-gap: 4px;
  color: ${props => props.theme.bodyText};
`;

const Shell: FC = () => {
  const source$ = merge(instrumentSubscriptions$(), instrumentPriceSubscriptions$());
  return (
    <Subscribe source$={source$}>
      <ThemeWrapper>
        <MainPanel>
          <AppHeader />
          <InstrumentSelector />
          <Grid />
          <AppStatusBar />
        </MainPanel>
      </ThemeWrapper>
    </Subscribe>
  );
};

export default Shell;
