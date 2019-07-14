import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Theme } from '../../shared';
import { ConnectionStatus } from '../../../state/types';
import { GlobalState } from '../../../services/epics/Epics';

interface IProps {
  sessionId: string;
  connectionStatus: ConnectionStatus;
  theme: Theme;
}

const ConnectionStatusWrapper = styled.div`
  width: 520px;
  margin-left: auto;
  display: flex;
`

interface IStatusProps {
  connectionStatus: ConnectionStatus;
  theme: Theme;
}

const Status = styled.div<IStatusProps>`
  width: 50px;
  background-color: ${props => 
    props.connectionStatus === ConnectionStatus.CONNECTED ? props.theme.connection.connected : props.theme.connection.disconnected
  };
`

const TickerStatusComponent: FC<IProps> = (props) => {
  const connectionStatus = useSelector((state: GlobalState) => state.app.connectionStatus);
  const sessionId = useSelector((state: GlobalState) => state.app.sessionId);
  return (
    <ConnectionStatusWrapper>
      {connectionStatus}{sessionId && '- Session - ' + sessionId}
      <Status theme={props.theme} connectionStatus={connectionStatus}/>
    </ConnectionStatusWrapper>
  );
}

export default withTheme(TickerStatusComponent);