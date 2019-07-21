import React, { FC } from 'react';
import styled from 'styled-components';

import { IThemeProps } from '../../shared';
import { Instrument } from './../../../state/types';
import InstrumentToggle from './InstrumentToggleContainer';

interface IDataProps {
  instruments: Map<string, Instrument>;
  subscribedInstrumentIds: string[];
  toggleSubscribe: (id: string) => void;
}

const InstrumentSelectorPanel = styled.div`
  background-color: ${props  => props.theme.instrumentSelector.background};
  color: ${props  => props.theme.bodyText};
  height: 100px;
`;

type IProps = IDataProps & IThemeProps;

const InstrumentSelector:FC<IProps> = ({ instruments, toggleSubscribe, subscribedInstrumentIds }) => {
  return <InstrumentSelectorPanel>
    {Array.from(instruments.values()).map(instrument => {
      const isSubscribed = !!subscribedInstrumentIds.find(sId => instrument.id === sId); 
      return <InstrumentToggle
        key={instrument.id}
        instrument={instrument}
        subscribed={isSubscribed} 
        toggle={toggleSubscribe}
      >
      {instrument.id}
    </InstrumentToggle>
    })
    }
  </InstrumentSelectorPanel>;
}
 
export default InstrumentSelector;
