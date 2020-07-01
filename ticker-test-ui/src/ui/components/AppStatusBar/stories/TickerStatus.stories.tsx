import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import ConnectionStatusIcon from '../ConnectionStatusIcon';
import { ConnectionStatus } from '../../../../state/types';
import { getTheme, defaultTheme } from '../../../shared';

const theme = getTheme(defaultTheme);

storiesOf('Connection Status Icon', module)
  .add('disconnected', () => (
    <ThemeProvider theme={getTheme(defaultTheme)}>
      <ConnectionStatusIcon 
          connectionStatus={ConnectionStatus.DISCONNECTED}
          sessionId={'asession'}
      />
    </ThemeProvider>
  ))
  .add('connected', () => (
    <ThemeProvider theme={getTheme(defaultTheme)}>
      <ConnectionStatusIcon 
          connectionStatus={ConnectionStatus.CONNECTED}
          sessionId={'asession'}
      />
  </ThemeProvider>
  ));   
