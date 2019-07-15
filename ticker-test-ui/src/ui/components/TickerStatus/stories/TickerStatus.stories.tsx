import React from 'react';
import { storiesOf } from '@storybook/react';
import { TickerStatus } from '../TickerStatus';
import { ConnectionStatus } from '../../../../state/types';
import { getTheme } from '../../../shared';

const theme = getTheme();

storiesOf('TickerStaus', module)
  .add('disconnected', () => (
    <TickerStatus 
        connectionStatus={ConnectionStatus.DISCONNECTED}
        sessionId={'asession'}
        theme={theme}
    />
  ))
  .add('connected', () => (
    <TickerStatus 
        connectionStatus={ConnectionStatus.CONNECTED}
        sessionId={'asession'}
        theme={theme}
    />
  ));   
