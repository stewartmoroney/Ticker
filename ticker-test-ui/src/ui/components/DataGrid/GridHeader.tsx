import { FC } from "react";

import { Cell, Header } from "./gridStyles";

const GridHeader: FC = () => (
  <Header>
    <Cell>Name</Cell>
    <Cell>Price</Cell>
  </Header>
);

export default GridHeader;
