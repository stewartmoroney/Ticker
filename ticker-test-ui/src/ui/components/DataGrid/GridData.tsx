import { bind } from "@react-rxjs/core";
import React, { FC } from "react";
import { startWith } from "rxjs/operators";

import { instrumentState$ } from "../../../services/InstrumentService/instrumentServiceImpl";
import { subscribedPrices$ } from "../../../services/PriceService/subscribedPricesImpl";
import { Instrument, Price } from "../../../state/types";
import GridRow from "./GridRow";
import { GridRows } from "./gridStyles";

const [useInstruments] = bind(
  instrumentState$().pipe(startWith([] as Instrument[]))
);

const [useSubscribedPrices] = bind(
  subscribedPrices$.pipe(startWith([] as Price[]))
);

const GridData: FC = () => {
  const instruments = useInstruments();
  const prices = useSubscribedPrices();

  return (
    <GridRows>
      {instruments.map((instrument: Instrument) => (
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
