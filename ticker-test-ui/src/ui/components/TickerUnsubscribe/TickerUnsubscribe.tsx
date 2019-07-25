import React, { FC , useCallback } from 'react';

import { IAppAction } from '../../../services/redux/actions';

interface IProps {
  unsubscribe: () => IAppAction;
}

const TickerUnsubscribeComponent:FC<IProps> = ({ unsubscribe }) => {
  const handleSubmit = useCallback(() => {
    unsubscribe();
  }, [unsubscribe]);

  return <button onClick={handleSubmit}>Ticker Unsubscribe</button>;
}

export default TickerUnsubscribeComponent;
