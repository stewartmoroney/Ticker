import React from 'react';
import { storiesOf } from '@storybook/react';
import ConnectionStatusIcon from '../ConnectionStatusIcon';
import { ConnectionStatus } from '../../../../state/types';
import { getTheme, defaultTheme } from '../../../shared';

const theme = getTheme(defaultTheme);

storiesOf('Connection Status Icon', module)
  .add('disconnected', () => (
    <ConnectionStatusIcon 
        connectionStatus={ConnectionStatus.DISCONNECTED}
        sessionId={'asession'}
        theme={theme}
    />
  ))
  .add('connected', () => (
    <ConnectionStatusIcon 
        connectionStatus={ConnectionStatus.CONNECTED}
        sessionId={'asession'}
        theme={theme}
    />
  ));   
