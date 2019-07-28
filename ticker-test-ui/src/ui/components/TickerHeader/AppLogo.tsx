import React, { FC } from 'react';
import styled from 'styled-components';

const circleWidth=25;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const AppLogo:FC = () => {
  const makeCircle = (inWidth: number, strokeWidth: number) => {
    const circleWidth= inWidth.toString();
    
    return <circle
    cx={(inWidth + strokeWidth).toString()} 
    cy={(inWidth + strokeWidth).toString()} 
    r={circleWidth} 
    fill={'white'}
    stroke={'black'} 
    strokeWidth={strokeWidth.toString()}
    fillOpacity={'0.7'}
    >
    </circle>;
  }
const c1 = makeCircle(circleWidth, 2);
const c2 = makeCircle(circleWidth-15, 1);
  return <SVG>
    {c1}
    {c2}
  </SVG>;
}

export default AppLogo;
