import React, { FC } from "react";
import { useSelector } from "react-redux";

import { GlobalState } from "../../../services/redux/GlobalState";
import { Instrument } from "../../../state/types";
import GridRow from "./GridRow";
import { GridRows } from "./gridStyles";

const GridData: FC = () => {
  const instruments = useSelector((state: GlobalState) => state.instruments);

  const rows = instruments.map((instrument: Instrument) => (
    <GridRow key={instrument.id} instrument={instrument}></GridRow>
  ));
  return <GridRows>{rows}</GridRows>;
};

export default GridData;
