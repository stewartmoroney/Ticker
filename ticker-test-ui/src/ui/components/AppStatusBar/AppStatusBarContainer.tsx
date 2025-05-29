import { FC } from "react";
import { styled } from '@mui/material/styles';

import { useConnectionState } from "../../../services/getTransport";
import ThemeSelector from "../ThemeSelector";
import ConnectionStatusIcon from "./ConnectionStatusIcon";

const StatusBar = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '20px',
  backgroundColor: theme.panel.background,
}));

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
