import { useEffect, useState } from "react";

let ClockTime = () => {
  let [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <p>
      The Current time is : {dateTime.toLocaleDateString()} {" - "} {dateTime.toLocaleTimeString()}
    </p>
  );
};

export default ClockTime;
