import React, { FC } from "react";

import { Instrument, Price } from "../../../state/types";
import { Cell, Row } from "./gridStyles";

interface Props {
  instrument: Instrument;
  price: Price | undefined;
}

const GridRow: FC<Props> = ({ instrument, price }) => (
  <Row>
    <Cell>{instrument.name}</Cell>
    <Cell>{price && price.value}</Cell>
  </Row>
);

export default GridRow;
