import { withTheme } from 'styled-components';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { GlobalState } from '../../../services/epics/Epics';
import TickerStatus from './TickerStatus';
import { IThemeProps } from '../../shared';

const TickerStatusContainer: FC<IThemeProps> = (props) => {
  const connectionStatus = useSelector((state: GlobalState) => state.system.connectionStatus);
  const sessionId = useSelector((state: GlobalState) => state.system.sessionId);

  return <TickerStatus connectionStatus={connectionStatus} sessionId={sessionId} theme={props.theme}/>
}

export default withTheme(TickerStatusContainer);
