import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  value: string;
}

const Panel = styled.div`
  background-color: ${props  => props.theme.panel.background};
`;

const TickerBody: FC<IProps> = (props) => {
  return <Panel>{props.value}</Panel>;
}

export default TickerBody;
