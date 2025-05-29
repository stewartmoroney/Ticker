import { styled } from '@mui/material/styles';

import { Instrument } from "./../../../state/types";
import InstrumentToggle from "./InstrumentToggle";

interface IProps {
  instruments: Instrument[];
  subscribedInstrumentIds: string[];
}

const InstrumentSelectorPanel = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100px',
  backgroundColor: theme.panel.background,
}));

const InstrumentSelector = ({
  instruments,
  subscribedInstrumentIds
}: IProps) => (
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
        />
      );
    })}
  </InstrumentSelectorPanel>
);

export default InstrumentSelector;
