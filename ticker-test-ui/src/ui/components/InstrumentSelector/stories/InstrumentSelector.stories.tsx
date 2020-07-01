import React from 'react';

import { ThemeProvider } from 'styled-components';

import { storiesOf } from '@storybook/react';
import InstrumentSelector from '../InstrumentSelector';
import { getTheme, defaultTheme } from '../../../shared';
import { Instrument } from './../../../../state/types';

const theme = getTheme(defaultTheme);

const instruments: Instrument[] = [
{  
  id: '1',
  name: 'a'
},
{
  id: '2',
  name: 'b'
}];

const toggleCLick = () => {
  alert('');  
};

storiesOf('InstrumentSelector', module)
  .add('No Instruments', () => (
    <ThemeProvider theme={theme}>
      <InstrumentSelector
          instruments= {[]}
          subscribedInstrumentIds = {[]}
          toggleSubscribe={toggleCLick}
      />
    </ThemeProvider>
  ))
  .add('Has Instruments', () => (
    <ThemeProvider theme={theme}>
      <InstrumentSelector 
          instruments={instruments}
          subscribedInstrumentIds = {['1']}
          toggleSubscribe={toggleCLick}
      />
    </ThemeProvider>
  ));   
