import React, { FC } from 'react';

import { withTheme } from 'styled-components';
import { IThemeProps } from '../../shared';
import InstrumentToggle, { IDataProps } from './InstrumentToggle';

const InstrumentToggleContainer: FC<IThemeProps & IDataProps> = (props) => {
  return <InstrumentToggle
      {...props}
    >        
  </InstrumentToggle>;
}

export default withTheme(InstrumentToggleContainer);
