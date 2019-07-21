import React from 'react';

import { ThemeProvider } from 'styled-components';

import { storiesOf } from '@storybook/react';
import { getTheme } from '../../../shared';
import { Instrument } from './../../../../state/types';
import InstrumentToggle from '../InstrumentToggle';

const theme = getTheme();

const instrument: Instrument = {
  id: '1'
};

const toggleCLick = () => {
  alert('');  
};

storiesOf('InstrumentToggle', module)
  .add('Subscribed Instrument', () => (
    <ThemeProvider theme={getTheme()}>
      <InstrumentToggle 
          theme={theme}
          instrument={instrument}
          subscribed={true}
          toggle={toggleCLick}
      />
    </ThemeProvider>
  ))
  .add('Not Subscribed Instruments', () => (
    <ThemeProvider theme={getTheme()}>
      <InstrumentToggle 
          theme={theme}
          instrument={instrument}
          subscribed={false}
          toggle={toggleCLick}
      />
    </ThemeProvider>
  ));   
