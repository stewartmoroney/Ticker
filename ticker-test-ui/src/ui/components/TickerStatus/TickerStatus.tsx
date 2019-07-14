import { withTheme } from 'emotion-theming';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { GlobalState } from '../../../services/epics/Epics';
import { TickerStatusComponent } from './TickerStatusComponent';
import { IThemeProps } from '../../shared';

const TickerStatus: FC<IThemeProps> = (props) => {
  const connectionStatus = useSelector((state: GlobalState) => state.app.connectionStatus);
  const sessionId = useSelector((state: GlobalState) => state.app.sessionId);

  return <TickerStatusComponent  connectionStatus={connectionStatus} sessionId={sessionId} theme={props.theme}/>
}

export default withTheme(TickerStatus);
