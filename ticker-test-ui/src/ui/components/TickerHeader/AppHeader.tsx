import React, { FC } from "react";
import styled from "styled-components";

import AppLogo from "./AppLogo";

const HeaderPanel = styled.div`
  background-color: ${props => props.theme.panel.background};
  display: flex;
`;

const HeaderText = styled.div`
  text-align: center;
  font-size: 50px;
  flex-basis: calc(100% - 80px);
`;

const AppLogoPosition = styled.div`
  height: 80px;
  width: 80px;
`;

const AppHeader: FC = () => (
  <HeaderPanel>
    <HeaderText>Ticker Test App</HeaderText>
    <AppLogoPosition>
      <AppLogo />
    </AppLogoPosition>
  </HeaderPanel>
);

export default AppHeader;
