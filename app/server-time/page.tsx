import React from "react";

export default function page() {
  const serverTime = new Date().toISOString();
  return <div>Server time is: {serverTime}</div>;
}
