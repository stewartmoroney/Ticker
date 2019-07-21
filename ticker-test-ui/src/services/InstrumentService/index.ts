import { Observable } from "rxjs";
import { Instrument } from "./././../../state/types";

export interface IInstrumentService {
    subscribe: () => Observable<Instrument>;
}
