import React, { FC } from 'react';
import styled from 'styled-components';

const circleWidth=25;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const AppLogo:FC = () => {
  const makeCircle = (inWidth: number) => {
    const circleWidth= inWidth.toString();
    return <circle
    cx={circleWidth} 
    cy={circleWidth} 
    r={circleWidth} 
    fill={'white'}
    stroke={'black'} 
    strokeWidth={'3'}
    fillOpacity={'0.7'}
    >
    </circle>;
  }
const c1 = makeCircle(circleWidth);
const c2 = makeCircle(circleWidth-15);
  return <SVG>
    {c1}
    {c2}
  </SVG>;
}

export default AppLogo;
