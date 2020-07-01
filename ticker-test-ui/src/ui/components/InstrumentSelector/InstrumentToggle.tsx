import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import { Instrument } from './../../../state/types';

export interface IDataProps {
  instrument: Instrument;
  subscribed: boolean;
  toggle: (id: string, subscribed: boolean) => void;
}

type IProps = IDataProps;

const InstrumentButton = styled(Button)`
  background-color: 'azure';
`;

const InstrumentToggle:FC<IProps> = ({ instrument, subscribed, toggle }) => {
  const toggleClick = useCallback(()=> {
    toggle(instrument.id, subscribed);
  },[instrument.id, subscribed, toggle]);

  return <InstrumentButton
    variant="outlined"
    disableRipple={true}
    disableFocusRipple={true}
    disableTouchRipple={true}
    color={subscribed ? 'primary' : 'secondary'}
    onClick={toggleClick}
    >
      {instrument.id}
    </InstrumentButton>;
}
 
export default InstrumentToggle;
