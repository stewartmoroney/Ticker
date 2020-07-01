import React, { FC } from 'react';
import { Price, Instrument } from '../../../state/types';
import { Row, Cell } from './gridStyles';
import { GlobalState } from '../../../services/epics/Epics';
import { useSelector } from 'react-redux';

export interface IDataProps {
    instrument: Instrument;
}

type IProps = IDataProps;

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
  
export default GridRow;
