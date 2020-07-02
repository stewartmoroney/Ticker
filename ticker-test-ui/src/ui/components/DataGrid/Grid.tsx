import React, { FC } from "react";
import { useSelector } from "react-redux";

import { GlobalState } from "../../../services/redux/GlobalState";
import GridData from "./GridData";
import GridHeader from "./GridHeader";
import { NoData, Row, Table } from "./gridStyles";

const Grid: FC = () => {
  const hasPrices = useSelector(
    (state: GlobalState) => state.prices.length > 0
  );

  return (
    <Table>
      <GridHeader />
      {hasPrices ? (
        <GridData />
      ) : (
        <Row>
          <NoData>No data available</NoData>
        </Row>
      )}
    </Table>
  );
};

export default Grid;
