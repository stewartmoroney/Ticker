import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { withTheme } from 'styled-components';
import { IThemeProps } from '../../shared';
import { Price, Instrument } from '../../../state/types';
import GridRow from './GridRow';
import { GlobalState } from '../../../services/epics/Epics';
import { Table, Header, Row, Cell, NoData } from './gridStyles';

type IProps = IThemeProps;

const Grid:FC<IProps> = () => {
    const prices = useSelector((state: GlobalState) => state.prices);
    const instruments = useSelector((state: GlobalState) => state.instruments);

    return <Table>
        <Header>
            <Cell>Name</Cell>
            <Cell>Price</Cell>
        </Header>        

        {
        prices.length > 0 ? 
        prices
        .map((price: Price) => {
            const instrument = instruments.find((instrument: Instrument) => {
                return instrument.id === price.instrumentId;
            })
            return instrument ? <GridRow 
                price={price} 
                instrument={instrument}
            ></GridRow> : null
        })
        : <Row><NoData>No data available</NoData></Row>  
        }
    </Table>
}
  
export default withTheme(Grid);
