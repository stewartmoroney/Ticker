import React, { FC, useCallback } from 'react';

import InstrumentSelector from './InstrumentSelector';
import { withTheme } from 'styled-components';
import { IThemeProps } from '../../shared';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../../../services/epics/Epics';
import { subscribeInstrument, unsubscribeInstrument } from '../../../services/redux/actions';

const InstrumentSelectorContainer: FC<IThemeProps> = (props) => {
  const dispatch = useDispatch();
  const toggle = useCallback((id: string, subscribed: boolean) => {
    if(subscribed) {
      dispatch(unsubscribeInstrument(id));
    } else {
      dispatch(subscribeInstrument(id));

    }
  }, [dispatch]);

  const instruments = useSelector((state: GlobalState) => {
    return state.instruments
  });
  
  const subscribedInstrumentIds = useSelector((state: GlobalState) => {
    return state.subscriptions.subscribedInstruments
  });

  return <InstrumentSelector
      theme={props.theme}
      instruments={instruments}
      subscribedInstrumentIds={subscribedInstrumentIds}
      toggleSubscribe={toggle}>        
  </InstrumentSelector>;
}

export default withTheme(InstrumentSelectorContainer);
