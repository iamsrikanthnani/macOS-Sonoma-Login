import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  top: 5rem;
`;

const TextWithBlur = styled.div`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  border-radius: 50px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.09);
  user-select: none;
`;

const DateText = styled(TextWithBlur)`
  font-size: 2rem;
  font-weight: 400;
`;

const TimeText = styled(TextWithBlur)`
  font-size: 6.5rem;
  font-weight: 700;
  font-family: "SF Pro Rounded Bold";
`;

const Timestamp = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(dateTime);

  const rawFormattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(dateTime);

  // Remove AM or PM from the formatted time
  const formattedTime = rawFormattedTime.replace(/\s[APap][Mm]$/, "");

  return (
    <Wrapper>
      <DateText>{formattedDate}</DateText>
      <TimeText>{formattedTime}</TimeText>
    </Wrapper>
  );
};

export default Timestamp;
