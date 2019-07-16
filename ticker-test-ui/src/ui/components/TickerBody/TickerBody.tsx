import React, { FC } from 'react';

interface IProps {
  value: string;
}

const TickerBody: FC<IProps> = (props) => {
  return <div>{props.value}</div>;
}

export default TickerBody;
