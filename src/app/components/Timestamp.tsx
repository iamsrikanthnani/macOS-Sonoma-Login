import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  top: 7rem;
`;

const TextWithBlur = styled.div`
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  font-family: "SF Pro Rounded";
  border-radius: 50px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.27);
`;

const DateText = styled(TextWithBlur)`
  font-size: 2rem;
  font-weight: 500;
`;

const TimeText = styled(TextWithBlur)`
  font-size: 7rem;
  font-weight: 700;
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
