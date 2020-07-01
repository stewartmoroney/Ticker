import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { withTheme } from 'styled-components';
import { IThemeProps } from '../../shared';
import { Instrument } from '../../../state/types';
import { GridRows }  from './gridStyles';
import GridRow from './GridRow';
import { GlobalState } from '../../../services/epics/Epics';

type IProps = IThemeProps;

const GridData:FC<IProps> = () => {
    const instruments = useSelector((state: GlobalState) => state.instruments);

    const rows = instruments
    .map((instrument: Instrument) => {
        return <GridRow 
            instrument={instrument}
        ></GridRow>
    })
    return <GridRows>
        {rows}
    </GridRows>;
}
  
export default withTheme(GridData);
