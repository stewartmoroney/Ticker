import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { withTheme } from 'styled-components';
import { IThemeProps } from '../../shared';
import { Price, Instrument } from '../../../state/types';
import { GridRows }  from './gridStyles';
import GridRow from './GridRow';
import { GlobalState } from '../../../services/epics/Epics';

type IProps = IThemeProps;

const GridData:FC<IProps> = () => {
    const prices = useSelector((state: GlobalState) => state.prices);
    const instruments = useSelector((state: GlobalState) => state.instruments);

    const rows = prices
    .map((price: Price) => {
        const instrument = instruments.find((instrument: Instrument) => {
            return instrument.id === price.instrumentId;
        })
        return instrument ? <GridRow 
            price={price} 
            instrument={instrument}
        ></GridRow> : null
    })
    return <GridRows>
        {rows}
    </GridRows>;

}
  
export default withTheme(GridData);
