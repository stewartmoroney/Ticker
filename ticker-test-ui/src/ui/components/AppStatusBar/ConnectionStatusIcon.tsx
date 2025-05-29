import { useCallback } from "react";
import { styled } from '@mui/material/styles';

import { ConnectionStatus } from "../../../state/types";

export interface IDataProps {
  sessionId: string;
  connectionStatus: ConnectionStatus;
}

const ConnectionStatusWrapper = styled('div')`
  margin-right: 2px;
  margin-left: auto;
`;

const Status = styled('div')(() => ({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
}));

const ConnectedStatus = styled(Status)(({ theme }) => ({
  backgroundColor: theme.connection.connected
}));

const DisconnectedStatus = styled(Status)(({ theme }) => ({
  backgroundColor: theme.connection.disconnected
}));

const ConnectionStatusIcon = (props: IDataProps) => {
  const statusText = useCallback(
    () =>
      props.connectionStatus +
      " " +
      (props.sessionId && "- Session - " + props.sessionId),
    [props.connectionStatus, props.sessionId]
  );

  return (
    <ConnectionStatusWrapper>
      <abbr title={statusText()}>
        {props.connectionStatus === ConnectionStatus.CONNECTED ? <ConnectedStatus/> : <DisconnectedStatus/>}
      </abbr>
    </ConnectionStatusWrapper>
  );
};

export default ConnectionStatusIcon;
