import React, { FC } from 'react';

import InstrumentToggle, { IDataProps } from './InstrumentToggle';

const InstrumentToggleContainer: FC<IDataProps> = (props) => {
  return <InstrumentToggle
      {...props}
    >        
  </InstrumentToggle>;
}

export default InstrumentToggleContainer;
