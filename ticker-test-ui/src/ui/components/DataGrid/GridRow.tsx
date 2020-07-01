import React, { FC } from 'react';
import { withTheme } from 'styled-components';
import { IThemeProps } from '../../shared';
import { Price, Instrument } from '../../../state/types';
import { Row, Cell } from './gridStyles';
import { GlobalState } from '../../../services/epics/Epics';
import { useSelector } from 'react-redux';

export interface IDataProps {
    instrument: Instrument;
}

type IProps = IDataProps & IThemeProps;

const GridRow:FC<IProps> = ({ instrument }) => {
    const price = useSelector((state: GlobalState) => {
        return state.prices.find((price: Price) => {
            return price.instrumentId === instrument.id;
        });
    });

    return <Row>
        <Cell>
            {instrument.name}
        </Cell>  
        <Cell>
            {price && price.value}
        </Cell>  
    </Row>
}
  
export default withTheme(GridRow);
