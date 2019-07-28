import styled, { withTheme } from 'styled-components';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { GlobalState } from '../../../services/epics/Epics';
import ConnectionStatusIcon from './ConnectionStatusIcon';
import { IThemeProps } from '../../shared';
import ThemeSelector from '../ThemeSelector';

const StatusBar = styled.div`
  display: flex;
`;

const AppStatusBarContainer: FC<IThemeProps> = (props) => {
  const connectionStatus = useSelector((state: GlobalState) => state.system.connectionStatus);
  const sessionId = useSelector((state: GlobalState) => state.system.sessionId);

 return <StatusBar>
    <ThemeSelector/>
    <ConnectionStatusIcon connectionStatus={connectionStatus} sessionId={sessionId} theme={props.theme}/>
  </StatusBar> 
}

export default withTheme(AppStatusBarContainer);
