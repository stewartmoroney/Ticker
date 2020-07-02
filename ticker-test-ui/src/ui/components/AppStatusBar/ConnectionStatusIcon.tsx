import React, { FC, useCallback } from "react";
import styled from "styled-components";

import { ConnectionStatus } from "../../../state/types";

export interface IDataProps {
  sessionId: string;
  connectionStatus: ConnectionStatus;
}

const ConnectionStatusWrapper = styled.div`
  margin-right: 2px;
  margin-left: auto;
`;

const Status = styled.div<{ connectionStatus: ConnectionStatus }>`
  width: 10px;
  height: 10px;

  background-color: ${props =>
    props.connectionStatus === ConnectionStatus.CONNECTED
      ? props.theme.connection.connected
      : props.theme.connection.disconnected};

  border-radius: 50%;
`;

const ConnectionStatusIcon: FC<IDataProps> = props => {
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
        <Status connectionStatus={props.connectionStatus} />
      </abbr>
    </ConnectionStatusWrapper>
  );
};

export default ConnectionStatusIcon;
