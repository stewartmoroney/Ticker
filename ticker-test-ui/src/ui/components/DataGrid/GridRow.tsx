import { Instrument, Price } from "../../../state/types";
import { Cell, Row } from "./gridStyles";

interface Props {
  instrument: Instrument;
  price: Price | undefined;
}

const GridRow = ({ instrument, price }: Props) => {
  return (
    <Row>
      <Cell>{instrument.name}</Cell>
      <Cell>{price && price.value}</Cell>
    </Row>
  );
};

export default GridRow;
