import { bind } from "@react-rxjs/core";
import React, { FC } from "react";
import { startWith } from "rxjs/operators";
import styled from "styled-components";

import getConnectionStatus$ from "../../../services/getConnectionStatus$";
import { ConnectionStatus } from "../../../state/types";
import ThemeSelector from "../ThemeSelector";
import ConnectionStatusIcon from "./ConnectionStatusIcon";

const StatusBar = styled.div`
  display: flex;
  height: 20px;
  line-height: 20px;
  background-color: ${props => props.theme.panel.background};
`;

const [useConnectionState] = bind(
  getConnectionStatus$().pipe(
    startWith(ConnectionStatus.DISCONNECTED as ConnectionStatus)
  )
);

const AppStatusBarContainer: FC = () => {
  const connectionStatus = useConnectionState();
  const sessionId = "";

  return (
    <StatusBar>
      <ThemeSelector />
      <ConnectionStatusIcon
        connectionStatus={connectionStatus}
        sessionId={sessionId}
      />
    </StatusBar>
  );
};

export default AppStatusBarContainer;
