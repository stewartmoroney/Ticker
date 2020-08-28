import { bind } from "@react-rxjs/core";
import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startWith } from "rxjs/operators";

import { subscribedInstrumentsImpl } from "../../../services/InstrumentService/instrumentServiceImpl";
import {
  subscribeInstrument,
  unsubscribeInstrument
} from "../../../services/redux/actions";
import { GlobalState } from "../../../services/redux/GlobalState";
import { Instrument } from "../../../state/types";
import InstrumentSelector from "./InstrumentSelector";

const [useInstruments] = bind(
  subscribedInstrumentsImpl().pipe(startWith([] as Instrument[]))
);

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

  const instruments = useInstruments();

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
