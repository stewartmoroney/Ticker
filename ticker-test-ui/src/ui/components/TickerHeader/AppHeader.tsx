import React, { FC } from 'react';
import styled from 'styled-components';
import AppLogo from './AppLogo';

const HeaderPanel = styled.div`
  width: 100%;
  display: inline-block;
`;

const HeaderText = styled.div`
  text-align: center;
`;

const AppLogoPosition = styled.div`
  height: 55px;
  width: 55px;
  float: right;
`;

const AppHeader:FC = () => {
  return <HeaderPanel>
    <HeaderText>Ticker Test App</HeaderText>   
    <AppLogoPosition>
      <AppLogo/>
    </AppLogoPosition>   
  </HeaderPanel>  
}

export default AppHeader; 
