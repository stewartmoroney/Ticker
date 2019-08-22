import styled from 'styled-components';
import React, { FC, useCallback } from 'react';

import { IThemeProps } from '../../shared';
import { ConnectionStatus } from '../../../state/types';

export interface IDataProps {
  sessionId: string;
  connectionStatus: ConnectionStatus;
}

const ConnectionStatusWrapper = styled.div<IThemeProps>`
  margin-right: 0px;
  margin-left: auto;
`

type StatusProps = IDataProps & IThemeProps;

const Status = styled.div<StatusProps>`
  width: 10px;
  height: 10px;
  background-color: ${({ connectionStatus, theme }) => 
    connectionStatus === ConnectionStatus.CONNECTED ? theme.connection.connected : theme.connection.disconnected
  };
  border-radius: 50%;
  top: 4px;
  position: relative;
  float: right;
  margin-right: 2px;
`

type IProps = IThemeProps & IDataProps;

const ConnectionStatusIcon: FC<IProps> = (props) => {
  const statusText = useCallback(() => {
    return props.connectionStatus + ' ' + (props.sessionId && '- Session - ' + props.sessionId);
  }, [props.connectionStatus, props.sessionId]);
  
      
  return (
    <ConnectionStatusWrapper 
      theme={props.theme}
    >      
      <abbr title={statusText()}> 
        <Status {...props}/>
      </abbr>
    </ConnectionStatusWrapper>
  );
}

export default ConnectionStatusIcon;