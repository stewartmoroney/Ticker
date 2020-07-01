import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { withTheme } from 'styled-components';
import { IThemeProps } from '../../shared';
import { GlobalState } from '../../../services/epics/Epics';
import { Table, Row, NoData } from './gridStyles';
import GridHeader from './GridHeader';
import GridData from './GridData';

type IProps = IThemeProps;

const Grid:FC<IProps> = () => {
    const hasPrices = useSelector((state: GlobalState) => state.prices.length > 0);

    return <Table>
        <GridHeader/>
        {
        hasPrices ? 
            <GridData/> : 
            <Row><NoData>No data available</NoData></Row>  
        }
    </Table>
}
  
export default withTheme(Grid);
