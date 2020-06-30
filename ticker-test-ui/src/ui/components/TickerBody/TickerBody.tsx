import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  id: string;
  timeStamp: string;
}

const Panel = styled.div`
  background-color: ${props  => props.theme.panel.background};
`;

const TickerBody: FC<IProps> = (props) => {
  return <Panel>{props.id} - {props.timeStamp}</Panel>;
}

export default TickerBody;
