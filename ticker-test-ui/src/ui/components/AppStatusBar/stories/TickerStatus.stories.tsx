import React from "react";
import { ThemeProvider } from "styled-components";

import { ConnectionStatus } from "../../../../state/types";
import { defaultTheme, getTheme } from "../../../shared";
import ConnectionStatusIcon from "../ConnectionStatusIcon";

// storiesOf("Connection Status Icon", module)
//   .add("disconnected", () => (
//     <ThemeProvider theme={getTheme(defaultTheme)}>
//       <ConnectionStatusIcon
//         connectionStatus={ConnectionStatus.DISCONNECTED}
//         sessionId={"asession"}
//       />
//     </ThemeProvider>
//   ))
//   .add("connected", () => (
//     <ThemeProvider theme={getTheme(defaultTheme)}>
//       <ConnectionStatusIcon
//         connectionStatus={ConnectionStatus.CONNECTED}
//         sessionId={"asession"}
//       />
//     </ThemeProvider>
//   ));
