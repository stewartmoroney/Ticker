import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  subscribeInstrument,
  unsubscribeInstrument
} from "../../../services/redux/actions";
import { GlobalState } from "../../../services/redux/GlobalState";
import InstrumentSelector from "./InstrumentSelector";

const InstrumentSelectorContainer: FC = () => {
  const dispatch = useDispatch();
  const toggle = useCallback(
    (id: string, subscribed: boolean) => {
      if (subscribed) {
        dispatch(unsubscribeInstrument(id));
      } else {
        dispatch(subscribeInstrument(id));
      }
    },
    [dispatch]
  );

  const instruments = useSelector((state: GlobalState) => state.instruments);

  const subscribedInstrumentIds = useSelector(
    (state: GlobalState) => state.subscriptions.subscribedInstruments
  );

  return (
    <InstrumentSelector
      instruments={instruments}
      subscribedInstrumentIds={subscribedInstrumentIds}
      toggleSubscribe={toggle}
    ></InstrumentSelector>
  );
};

export default InstrumentSelectorContainer;
