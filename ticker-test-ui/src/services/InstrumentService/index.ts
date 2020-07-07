import { Observable } from "rxjs";

import { Instrument } from "../../state/types";

export type instrumentSubscribe = () => void;
export type subscribedInstruments = () => Observable<Instrument>;
