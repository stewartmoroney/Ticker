import styled from 'styled-components';
import React, { FC } from 'react';

import { IThemeProps } from '../../shared';
import { ConnectionStatus } from '../../../state/types';

export interface IDataProps {
  sessionId: string;
  connectionStatus: ConnectionStatus;
}

const ConnectionStatusWrapper = styled.div<IThemeProps>`
  width: auto;
  margin-right: auto;
  display: flex;
`

type StatusProps = IDataProps & IThemeProps;

const Status = styled.div<StatusProps>`
  width: 50px;
  background-color: ${({ connectionStatus, theme }) => 
    connectionStatus === ConnectionStatus.CONNECTED ? theme.connection.connected : theme.connection.disconnected
  };
`

type IProps = IThemeProps & IDataProps;

const TickerStatus: FC<IProps> = (props) => {
  return (
    <ConnectionStatusWrapper 
      theme={props.theme}
    >
      {props.connectionStatus}{props.sessionId && '- Session - ' + props.sessionId}
      <Status {...props}/>
    </ConnectionStatusWrapper>
  );
}

export default TickerStatus;
