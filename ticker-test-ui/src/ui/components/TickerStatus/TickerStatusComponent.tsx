import styled from '@emotion/styled';
import React, { FC } from 'react';

import { Theme, IThemeProps } from '../../shared';
import { ConnectionStatus } from '../../../state/types';

export interface IDataProps {
  sessionId: string;
  connectionStatus: ConnectionStatus;
}

const ConnectionStatusWrapper = styled.div`
  width: 520px;
  margin-left: auto;
  display: flex;
`

type StatusProps = {
  connectionStatus: ConnectionStatus;
  theme: Theme;
}

const Status = styled.div<StatusProps>`
  width: 50px;
  background-color: ${props => 
    props.connectionStatus === ConnectionStatus.CONNECTED ? props.theme.connection.connected : props.theme.connection.disconnected
  };
`

type IProps = IThemeProps & IDataProps;

export const TickerStatusComponent: FC<IProps> = (props) => {
  return (
    <ConnectionStatusWrapper>
      {props.connectionStatus}{props.sessionId && '- Session - ' + props.sessionId}
      <Status theme={props.theme} connectionStatus={props.connectionStatus}/>
    </ConnectionStatusWrapper>
  );
}
