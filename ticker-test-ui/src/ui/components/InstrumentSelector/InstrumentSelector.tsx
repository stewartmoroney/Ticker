import React, { FC } from 'react';
import styled from 'styled-components';

import { IThemeProps } from '../../shared';
import { Instrument } from './../../../state/types';
import InstrumentToggle from './InstrumentToggleContainer';

interface IDataProps {
  instruments: Instrument[];
  subscribedInstrumentIds: string[];
  toggleSubscribe: (id: string) => void;
}

const InstrumentSelectorPanel = styled.div`
  height: 100px;
  background-color: ${props  => props.theme.panel.background};
`;

type IProps = IDataProps & IThemeProps;

const InstrumentSelector:FC<IProps> = ({ instruments, toggleSubscribe, subscribedInstrumentIds }) => {
  return <InstrumentSelectorPanel>
    {
      instruments.map(instrument => {
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
