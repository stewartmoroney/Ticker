import { storiesOf } from "@storybook/react";
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Notifications from "..";
import { defaultTheme, getTheme } from "../../../shared";

const FakeApp = styled.div`
  width: 500px;
  height: 500px;
  background-color: green;
  position: relative;
  overflow: hidden;
`;

const Space = styled.div`
  height: 25px;
`;

const FakeAppContent = styled.div`
  line-height: 250px;
  margin: 25px;
  text-align: center;
  border: 1px solid black;
`;

const notificationsText: string[] = [
  "notification text1",
  "notification text2",
  "notification text3",
  "notification text4"
];

storiesOf("Notifications", module).add("Show some notifications", () => (
  <ThemeProvider theme={getTheme(defaultTheme)}>
    <FakeApp>
      <FakeAppContent>Fake App Contents...</FakeAppContent>
      <Notifications notifications={notificationsText} />
    </FakeApp>
  </ThemeProvider>
));

storiesOf("Notifications", module).add(
  "notifications flow up from bottom left",
  () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [messageCount, setMessageCount] = useState<number>(0);

    useEffect(() => {
      const interval = setInterval(() => {
        const newCount = (messageCount + 1) % 10;
        setMessageCount(newCount);
        const msgs = Array.from(Array(newCount).keys()).map(
          index => "notification text - " + index
        );
        setMessages(msgs);
      }, 1000);
      return () => clearInterval(interval);
    }, [messageCount]);

    return (
      <ThemeProvider theme={getTheme(defaultTheme)}>
        <div>
          <Space />

          <FakeApp>
            <FakeAppContent>Fake App Contents...</FakeAppContent>
            <Notifications notifications={messages} />
          </FakeApp>
        </div>
      </ThemeProvider>
    );
  }
);
