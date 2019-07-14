import React from 'react';
import { storiesOf } from '@storybook/react';
import { TickerStatusComponent } from '../TickerStatusComponent';
import { ConnectionStatus } from '../../../../state/types';
import { getTheme } from '../../../shared';

const theme = getTheme();

storiesOf('TickerStaus', module)
  .add('disconnected', () => (
    <TickerStatusComponent 
        connectionStatus={ConnectionStatus.DISCONNECTED}
        sessionId={'asession'}
        theme={theme}
    />
  ))
  .add('connected', () => (
    <TickerStatusComponent 
        connectionStatus={ConnectionStatus.CONNECTED}
        sessionId={'asession'}
        theme={theme}
    />
  ));   
