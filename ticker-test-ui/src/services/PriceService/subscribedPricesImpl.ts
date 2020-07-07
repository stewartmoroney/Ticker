import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

import { Price } from "../../state/types";
import subscribe from "../subscribe";

const isPriceMessage = (data: any) => data.type === "PriceUpdate";

export default (): Observable<Price> =>
  subscribe().pipe(
    filter(isPriceMessage),
    map(message => message.price)
  );
