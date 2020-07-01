import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Instrument } from '../../../state/types';
import { GridRows }  from './gridStyles';
import GridRow from './GridRow';
import { GlobalState } from '../../../services/epics/Epics';

const GridData:FC = () => {
    const instruments = useSelector((state: GlobalState) => state.instruments);

    const rows = instruments
    .map((instrument: Instrument) => {
        return <GridRow 
            key={instrument.id}
            instrument={instrument}
        ></GridRow>
    })
    return <GridRows>
        {rows}
    </GridRows>;
}
  
export default GridData;
