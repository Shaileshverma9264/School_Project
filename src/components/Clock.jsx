import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function Clock() {
  const [time, setTime] = useState("Loading...");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12; // Convert 0 -> 12 for AM
      const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>{time}</p>;
}
