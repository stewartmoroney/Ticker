import { bind } from "@react-rxjs/core";
import { defer } from "rxjs";
import { filter, map, shareReplay } from "rxjs/operators";

import { Message, messages$ } from "./getMessages$";

type NotificationMessage = {
  type: "Notification";
  message: string;
};

const isNotificationMessage = (data: Message): data is NotificationMessage =>
  data.type === "Notification";

export const notificationsState$ = () =>
  defer(() =>
    messages$.pipe(
      filter(isNotificationMessage),
      map(notication => notication.message),
      shareReplay(1)
    )
  );

export const [useNotifications] = bind(notificationsState$().pipe());
