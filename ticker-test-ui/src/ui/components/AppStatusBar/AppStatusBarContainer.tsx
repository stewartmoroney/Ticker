import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { GlobalState } from "../../../services/redux/GlobalState";
import ThemeSelector from "../ThemeSelector";
import ConnectionStatusIcon from "./ConnectionStatusIcon";

const StatusBar = styled.div`
  display: flex;
  height: 20px;
  line-height: 20px;
  background-color: ${props => props.theme.panel.background};
`;

const AppStatusBarContainer: FC = () => {
  const connectionStatus = useSelector(
    (state: GlobalState) => state.system.connectionStatus
  );
  const sessionId = useSelector((state: GlobalState) => state.system.sessionId);

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
