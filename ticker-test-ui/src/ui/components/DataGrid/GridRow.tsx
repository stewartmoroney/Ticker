import React, { FC } from "react";
import { useSelector } from "react-redux";

import { GlobalState } from "../../../services/redux/GlobalState";
import { Instrument, Price } from "../../../state/types";
import { Cell, Row } from "./gridStyles";

export interface IDataProps {
  instrument: Instrument;
}

type IProps = IDataProps;

const GridRow: FC<IProps> = ({ instrument }) => {
  const price = useSelector((state: GlobalState) =>
    state.prices.find((price: Price) => price.instrumentId === instrument.id)
  );

  return (
    <Row>
      <Cell>{instrument.name}</Cell>
      <Cell>{price && price.value}</Cell>
    </Row>
  );
};

export default GridRow;
