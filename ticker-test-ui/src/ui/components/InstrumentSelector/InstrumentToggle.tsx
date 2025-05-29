import { useCallback } from "react";
import { styled } from '@mui/material/styles';
import {
  subscribeToInstrumentPrice,
  unsubscribeToInstrumentPrice
} from "../../../services/PriceSubscriptionService/PriceSubscribeService";
import { Instrument } from "./../../../state/types";

export interface IProps {
  instrument: Instrument;
  subscribed: boolean;
}

const InstrumentButton = styled('div')(() => ({
  height: '50px',
  width: '100px',
  borderWidth: '1px',
  borderStyle: 'solid',
  textAlign: 'center',
  }));

const SubInstrumentButton = styled(InstrumentButton)(({ theme }) => ({
  borderColor: theme.subscriptions.subscribed
}));

const UnSubInstrumentButton = styled(InstrumentButton)(({ theme }) => ({
  borderColor: theme.subscriptions.unsubscribed
}));

const InstrumentToggle = ({ instrument, subscribed }: IProps) => {
  const toggleClick = useCallback(() => {
    if (subscribed) {
      unsubscribeToInstrumentPrice(instrument.id);
    } else {
      subscribeToInstrumentPrice(instrument.id);
    }
  }, [instrument.id, subscribed]);

  const InstrButton = subscribed ? SubInstrumentButton : UnSubInstrumentButton;
  return (
    <InstrButton onClick={toggleClick}>
      {instrument.name}
    </InstrButton>
  );
};

export default InstrumentToggle;
