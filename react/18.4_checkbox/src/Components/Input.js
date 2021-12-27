import React, { useState } from "react";

export default function Input() {
  const [seconds, setSeconds] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");

  const handleSeconds = (event) => {
    setSeconds(event.target.value);
    setMinutes(event.target.value / 60);
    setHours(event.target.value / 3600);
  };
  const handleMinutes = (event) => {
    setSeconds(event.target.value * 60);
    setMinutes(event.target.value);
    setHours(event.target.value / 60);
  };
  const handleHours = (event) => {
    setSeconds(event.target.value * 3600);
    setMinutes(event.target.value * 60);
    setHours(event.target.value);
  };

  return (
    <div>
      <div>
        <span>Seconds</span>
        <input type="text" value={seconds} onChange={handleSeconds} />
      </div>
      <div>
        <span>Minuets</span>
        <input type="text" value={minutes} onChange={handleMinutes} />
      </div>
      <div>
        <span>Hours</span>
        <input type="text" value={hours} onChange={handleHours} />
      </div>
    </div>
  );
}
