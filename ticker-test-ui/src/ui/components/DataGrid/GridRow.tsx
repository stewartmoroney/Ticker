import React, { FC } from 'react';
import { withTheme } from 'styled-components';
import { IThemeProps } from '../../shared';
import { Price, Instrument } from '../../../state/types';
import { Row, Cell } from './gridStyles';

export interface IDataProps {
    instrument: Instrument;
    price: Price;
  }

type IProps = IDataProps & IThemeProps;

const GridRow:FC<IProps> = ({ instrument, price }) => {
    return <Row>
        <Cell>
            {instrument.name}
        </Cell>  
        <Cell>
            {price.value}
        </Cell>  
    </Row>
}
  
export default withTheme(GridRow);
