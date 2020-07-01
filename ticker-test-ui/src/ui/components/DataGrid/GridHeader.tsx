import React, { FC } from 'react';
import { withTheme } from 'styled-components';
import { IThemeProps } from '../../shared';
import { Header, Cell } from './gridStyles';

const GridHeader:FC<IThemeProps> = () => {
return <Header>
    <Cell>Name</Cell>
    <Cell>Price</Cell>
</Header> 
}
  
export default withTheme(GridHeader);
