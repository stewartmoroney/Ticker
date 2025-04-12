import { FC } from "react";

import { useInstruments } from "../../../services/InstrumentService/instrumentServiceImpl";
import { useSubscribedPrices } from "../../../services/PriceService/subscribedPricesImpl";
import GridRow from "./GridRow";
import { GridRows } from "./gridStyles";

const GridData: FC = () => {
  const instruments = useInstruments();
  const prices = useSubscribedPrices();

  return (
    <GridRows>
      {instruments.map(instrument => (
        <GridRow
          key={instrument.id}
          instrument={instrument}
          price={prices.find(p => p.instrumentId === instrument.id)}
        ></GridRow>
      ))}
    </GridRows>
  );
};

export default GridData;
