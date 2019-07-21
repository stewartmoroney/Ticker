import React from 'react';

import { ThemeProvider } from 'styled-components';

import { storiesOf } from '@storybook/react';
import InstrumentSelector from '../InstrumentSelector';
import { getTheme } from '../../../shared';
import { Instrument } from './../../../../state/types';

const theme = getTheme();

const instruments: Map<string, Instrument> = (() => {
  const ins = new Map<string, Instrument>();
  ins.set('1', {
    id: '1'
  });
    
  ins.set('2', {
    id: '3'
  });
  return ins;
})();

const toggleCLick = () => {
  alert('');  
};

storiesOf('InstrumentSelector', module)
  .add('No Instruments', () => (
    <ThemeProvider theme={getTheme()}>
      <InstrumentSelector
          theme={theme}
          instruments={new Map<string, Instrument>()}
          subscribedInstrumentIds = {[]}
          toggleSubscribe={toggleCLick}
      />
    </ThemeProvider>
  ))
  .add('Has Instruments', () => (
    <ThemeProvider theme={getTheme()}>
      <InstrumentSelector 
          theme={theme}
          instruments={instruments}
          subscribedInstrumentIds = {['1']}
          toggleSubscribe={toggleCLick}
      />
    </ThemeProvider>
  ));   
