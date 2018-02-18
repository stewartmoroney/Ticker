import * as React from 'react';
import { connect } from 'react-redux';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import { ColumnApi, GridApi } from 'ag-grid';

import '../../node_modules/ag-grid/dist/styles/ag-grid.css';
import '../../node_modules/ag-grid/dist/styles/theme-fresh.css';

import './Grid.css';

interface Props {
    rowData: any[];
    columnDefs: any[];
}

const mapStateToProps = (state: any) => {
  return {
    columnDefs: state.columnDefs,
    rowData: state.rowData
  };
};

class Grid extends React.Component<Props, { }> {

  private gridApi: GridApi;
  private columnApi: ColumnApi;

  constructor(props: any) {
    super(props);

    this.onGridReady = this.onGridReady.bind(this);
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }

  render() {
    let containerStyle = {
      height: 115,
      width: 500
    };

    return(
      <div style={containerStyle} className="ag-fresh">
        <AgGridReact
          columnDefs={this.props.columnDefs}
          rowData={this.props.rowData}
          onGridReady={this.onGridReady}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Grid);