import { Subscribe } from "@react-rxjs/core";
import { styled } from '@mui/material/styles';
import { merge } from "rxjs";

import { instrumentSubscriptions$ } from "../../services/InstrumentService/instrumentServiceImpl";
import { instrumentPriceSubscriptions$ } from "../../services/PriceSubscriptionService/PriceSubscribeService";
import AppStatusBar from "../components/AppStatusBar";
import Grid from "../components/DataGrid";
import InstrumentSelector from "../components/InstrumentSelector";
import AppHeader from "../components/TickerHeader";
import ThemeWrapper from "./themeWrapper";

const MainPanel = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  backgroundColor: theme.body.background,
  gridTemplateRows: 'auto auto auto auto auto auto',
  gridRowGap: '4px',
  color: theme.bodyText,
}));

const Shell = () => {
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
