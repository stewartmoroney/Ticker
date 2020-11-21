import React, { useRef } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";

import Notification from "./Notification";

const NotificationsPanel = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  notifications: string[];
}

const Notifications = React.forwardRef((props: Props, ref) => {
  const notificationsRef = useRef(null);

  const { styles, attributes } = usePopper(
    (ref as React.MutableRefObject<null>).current,
    notificationsRef.current,
    {
      placement: "bottom",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [100, 100]
          }
        }
      ]
    }
  );

  return (
    <NotificationsPanel ref={notificationsRef}>
      {props.notifications.map((text, i) => (
        <Notification key={i} text={text} />
      ))}
    </NotificationsPanel>
  );
});

export default Notifications;
