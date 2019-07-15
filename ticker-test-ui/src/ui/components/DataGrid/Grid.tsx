import { ColumnApi, GridApi } from 'ag-grid';
import { AgGridReact } from 'ag-grid-react';
import * as React from 'react';
import { connect } from 'react-redux';

import { GlobalState } from '../../../services/epics/Epics';

import '../../../../node_modules/ag-grid/dist/styles/ag-grid.css';
import '../../../../node_modules/ag-grid/dist/styles/theme-fresh.css';

import './Grid.css';

interface IProps {
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

class Grid extends React.Component<IProps, {}> {
  private gridApi: GridApi | undefined;
  private columnApi: ColumnApi | undefined;

  constructor(props: IProps) {
    super(props);

    this.onGridReady = this.onGridReady.bind(this);
  }

  public render() {
    const containerStyle = {
      height: 115,
      width: 500
    };

    return (
      <div style={containerStyle} className="ag-fresh">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={this.props.rowData}
          onGridReady={this.onGridReady}
        />
      </div>
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
