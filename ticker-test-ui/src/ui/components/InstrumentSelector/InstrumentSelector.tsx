import React, { FC } from "react";
import styled from "styled-components";

import { Instrument } from "./../../../state/types";
import InstrumentToggle from "./InstrumentToggle";

interface IProps {
  instruments: Instrument[];
  subscribedInstrumentIds: string[];
  toggleSubscribe: (id: string, subscribed: boolean) => void;
}

const InstrumentSelectorPanel = styled.div`
  display: flex;
  height: 100px;
  background-color: ${props => props.theme.panel.background};
`;

const InstrumentSelector: FC<IProps> = ({
  instruments,
  toggleSubscribe,
  subscribedInstrumentIds
}) => (
  <InstrumentSelectorPanel>
    {instruments.map(instrument => {
      const isSubscribed = !!subscribedInstrumentIds.find(
        sId => instrument.id === sId
      );
      return (
        <InstrumentToggle
          key={instrument.id}
          instrument={instrument}
          subscribed={isSubscribed}
          toggle={toggleSubscribe}
        >
          {instrument.id}
        </InstrumentToggle>
      );
    })}
  </InstrumentSelectorPanel>
);

export default InstrumentSelector;
