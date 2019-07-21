import React, { FC, useCallback } from 'react';

import { IAppAction } from '../../../services/redux/actions/Actions';

interface IProps {
  logon: () => IAppAction;
}

const TickerLogon:FC<IProps> = ({ logon }) => { 
  const handleSubmit = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    logon();
  }, [logon]);

  return (
    <div>
      <button onClick={handleSubmit}>logon</button>
    </div>
  );
}

export default TickerLogon;
