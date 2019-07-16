import React, { FC , useCallback } from 'react';

import { IAppAction } from '../../../services/redux/Actions';

interface IProps {
  unsubscribe: () => IAppAction;
}

const TickerUnsubscribeComponent:FC<IProps> = (props) => {
  const handleSubmit = useCallback(() => {
    props.unsubscribe();
  }, [props.unsubscribe]);

  return <button onClick={handleSubmit}>Ticker Unsubscribe</button>;
}

export default TickerUnsubscribeComponent;
