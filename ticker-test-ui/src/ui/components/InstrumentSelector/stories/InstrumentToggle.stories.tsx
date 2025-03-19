import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
// import React from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme, getTheme } from "../../../shared";
import InstrumentToggle from "../InstrumentToggle";
import { Instrument } from "./../../../../state/types";

const theme = getTheme(defaultTheme);

const instrument: Instrument = {
  id: "1",
  name: "a",
};

// storiesOf("InstrumentToggle", module)
//   .add("Subscribed Instrument", () => (
//     <ThemeProvider theme={theme}>
//       <InstrumentToggle instrument={instrument} subscribed={true} />
//     </ThemeProvider>
//   ))
//   .add("Not Subscribed Instruments", () => (
//     <ThemeProvider theme={theme}>
//       <InstrumentToggle instrument={instrument} subscribed={false} />
//     </ThemeProvider>
//   ));
