import { ColumnApi, GridApi } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import * as React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { GlobalState } from '../../../services/epics/Epics';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import { IThemeProps } from '../../shared';

interface IGridProps {
  rowData: any[];
}

const mapStateToProps = (state: GlobalState) => {
  return {
    rowData: state.data.rowData
  };
};

const columnDefs = [
  { headerName: 'ID', field: 'id' },
  { headerName: 'Name', field: 'name' },
  { headerName: 'Value', field: 'value' }
];

const GridStyle = styled.div`
  border: ${props => 
    {return "1px solid" + props.theme.border}
  };
  && .ag-header-cell {
    color: ${props => props.theme.bodyText};
    background-color: ${props => props.theme.panel.background};
    border: none;
  }

  && .ag-header {
    border: none;
  }

  && .ag-row {
    background-color: ${props => props.theme.panel.background};
    border: none;
  }

  && .ag-cell {
    color: ${props => props.theme.bodyText};
    border: none;
  }
`;

type IProps = IGridProps & IThemeProps

class Grid extends React.Component<IProps, {}> {
  private gridApi: GridApi | undefined;
  private columnApi: ColumnApi | undefined;

  constructor(props: IProps) {
    super(props);
    this.onGridReady = this.onGridReady.bind(this);
  }

  public render() {
    return (
      <GridStyle style={{height: 115}}
         className="ag-balham">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={this.props.rowData}
          onGridReady={this.onGridReady}
        />
      </GridStyle>
    );
  }

  private onGridReady(params: any) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;

    if (this.gridApi) {
       this.gridApi.sizeColumnsToFit();
    }
  }
}

export default connect(mapStateToProps)(Grid);
