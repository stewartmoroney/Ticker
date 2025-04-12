import { FC } from "react";

import { useInstruments } from "../../../services/InstrumentService/instrumentServiceImpl";
import { useSubscribedInstruments } from "../../../services/PriceSubscriptionService/PriceSubscribeService";
import InstrumentSelector from "./InstrumentSelector";

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
