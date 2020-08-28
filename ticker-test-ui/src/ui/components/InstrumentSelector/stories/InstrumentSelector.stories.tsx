import { storiesOf } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme, getTheme } from "../../../shared";
import InstrumentSelector from "../InstrumentSelector";
import { Instrument } from "./../../../../state/types";

const theme = getTheme(defaultTheme);

const instruments: Instrument[] = [
  {
    id: "1",
    name: "a"
  },
  {
    id: "2",
    name: "b"
  }
];

storiesOf("InstrumentSelector", module)
  .add("No Instruments", () => (
    <ThemeProvider theme={theme}>
      <InstrumentSelector instruments={[]} subscribedInstrumentIds={[]} />
    </ThemeProvider>
  ))
  .add("Has Instruments", () => (
    <ThemeProvider theme={theme}>
      <InstrumentSelector
        instruments={instruments}
        subscribedInstrumentIds={["1"]}
      />
    </ThemeProvider>
  ));
