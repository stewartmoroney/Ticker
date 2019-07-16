import React, { FC, useCallback } from 'react';

import { IAppAction } from '../../../services/redux/Actions';

interface IProps {
  logon: () => IAppAction;
}

const TickerLogon:FC<IProps> = (props) => { 
  const handleSubmit = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    props.logon();
  }, [props.logon]);

  return (
    <div>
      <button onClick={handleSubmit}>logon</button>
    </div>
  );
}

export default TickerLogon;
