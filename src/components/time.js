"use client";
import React, { useState, useEffect } from "react";

const LocalTime = () => {
  const [currentTime, setCurrentTime] = useState(() =>
    new Intl.DateTimeFormat("en-TH", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(new Date())
  );

  useEffect(() => {
    const updateClock = () => {
      const formattedTime = new Intl.DateTimeFormat("en-TH", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(new Date());
      setCurrentTime(formattedTime);
    };
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <p>{currentTime} GMT+7</p>;
};

export default LocalTime;
