import React, { FC } from 'react';
import { Header, Cell } from './gridStyles';

const GridHeader:FC = () => {
return <Header>
    <Cell>Name</Cell>
    <Cell>Price</Cell>
</Header> 
}
  
export default GridHeader;
