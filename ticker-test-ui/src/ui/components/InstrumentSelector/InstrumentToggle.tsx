import React, { FC, useCallback } from "react";
import styled from "styled-components";

import {
  subscribeToInstrumentPrice,
  unsubscribeToInstrumentPrice
} from "../../../services/PriceSubscriptionService/PriceSubscribeService";
import { Instrument } from "./../../../state/types";

export interface IProps {
  instrument: Instrument;
  subscribed: boolean;
}

const InstrumentButton = styled.div<{ subscribed: boolean }>`
  width: 100px;
  height: 50px;
  line-height: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.subscribed
      ? props.theme.subscriptions.subscribed
      : props.theme.subscriptions.unsubscribed};
  text-align: center;
`;

const InstrumentToggle: FC<IProps> = ({ instrument, subscribed }) => {
  const toggleClick = useCallback(() => {
    if (subscribed) {
      unsubscribeToInstrumentPrice(instrument.id);
    } else {
      subscribeToInstrumentPrice(instrument.id);
    }
  }, [instrument.id, subscribed]);

  return (
    <InstrumentButton subscribed={subscribed} onClick={toggleClick}>
      {instrument.name}
    </InstrumentButton>
  );
};

export default InstrumentToggle;
