import styled from 'styled-components';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { GlobalState } from '../../../services/epics/Epics';
import ConnectionStatusIcon from './ConnectionStatusIcon';
import ThemeSelector from '../ThemeSelector';

const StatusBar = styled.div`
  display: flex;
  height: 20px;
  line-height: 20px;
  background-color: ${props  => props.theme.panel.background};
`;

const AppStatusBarContainer: FC = () => {
  const connectionStatus = useSelector((state: GlobalState) => state.system.connectionStatus);
  const sessionId = useSelector((state: GlobalState) => state.system.sessionId);

 return <StatusBar>
    <ThemeSelector/>
    <ConnectionStatusIcon connectionStatus={connectionStatus} sessionId={sessionId}/>
  </StatusBar> 
}

export default AppStatusBarContainer;
