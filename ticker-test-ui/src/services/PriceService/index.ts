import { Observable } from "rxjs";

import { Price } from "../../state/types";

export type subscribedPrices = () => Observable<Price>;
