import { FC } from "react";
import styled from "styled-components";

import { useConnectionState } from "../../../services/getTransport";
import ThemeSelector from "../ThemeSelector";
import ConnectionStatusIcon from "./ConnectionStatusIcon";
import { Theme } from "../../shared";

const StatusBar = styled.div<{theme: Theme}>`
  display: flex;
  height: 20px;
  line-height: 20px;
  background-color: ${props => props.theme.panel.background};
`;

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
