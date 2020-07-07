import { map } from "rxjs/operators";

import { ConnectionStatus } from "../../state/types";
import getConnectionStatus$ from "../getConnectionStatus$";
import { connected, disconnected } from "../redux/actions";
import { ApplicationEpic } from "./ApplicationEpic";

export const connectionStatusEpic: ApplicationEpic = () =>
  getConnectionStatus$().pipe(
    map(status =>
      status === ConnectionStatus.CONNECTED ? connected() : disconnected()
    )
  );
