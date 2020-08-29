import React, { FC } from "react";

import GridData from "./GridData";
import GridHeader from "./GridHeader";
import { Table } from "./gridStyles";

const Grid: FC = () => (
  <Table>
    <GridHeader />
    <GridData />
  </Table>
);

export default Grid;
