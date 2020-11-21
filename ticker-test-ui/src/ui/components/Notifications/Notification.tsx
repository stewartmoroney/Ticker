import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

const width = 150;

export const keyFrame = keyframes`
  0% {
    transform: translateX(${width + 25}px);
  }
  100% {
  }
`;

const NotificationPanel = styled.div`
  width: ${width}px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border: 1px solid white;
  background-color: ${props => props.theme.notification.background};
  color: ${props => props.theme.bodyText};
`;
//   animation: ${keyFrame} 0.6s ease-in-out;

const Notification: FC<{ text: string }> = ({ text }) => (
  <NotificationPanel>{text}</NotificationPanel>
);

export default Notification;
