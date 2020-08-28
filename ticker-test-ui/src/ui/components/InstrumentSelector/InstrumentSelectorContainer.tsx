import { bind } from "@react-rxjs/core";
import React, { FC } from "react";
import { startWith } from "rxjs/operators";

import { instrumentState$ } from "../../../services/InstrumentService/instrumentServiceImpl";
import { subscribedPricesState$ } from "../../../services/PriceSubscriptionService/PriceSubscribeService";
import { Instrument } from "../../../state/types";
import InstrumentSelector from "./InstrumentSelector";

const [useInstruments] = bind(
  instrumentState$().pipe(startWith([] as Instrument[]))
);

const [useSubscribedInstruments] = bind(
  subscribedPricesState$().pipe(startWith([] as string[]))
);

const InstrumentSelectorContainer: FC = () => {
  const instruments = useInstruments();
  const subscribedInstrumentIds = useSubscribedInstruments();

  return (
    <InstrumentSelector
      instruments={instruments}
      subscribedInstrumentIds={subscribedInstrumentIds}
    ></InstrumentSelector>
  );
};

export default InstrumentSelectorContainer;
