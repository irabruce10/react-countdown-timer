import { useEffect, useState } from 'react';

export default function App() {
  const newYear = new Date('1 jan 2025');
  const newyearDate = new Date(newYear);
  const cdate = new Date();

  const totalSecond = Math.floor(newyearDate - cdate) / 1000;

  const [hour, setHour] = useState(totalSecond);

  useEffect(() => {
    const interval = setInterval(() => {
      setHour((prevHour) => (prevHour += -1));
    }, 1000);

    return () => clearInterval(interval);
  });

  const days = Math.floor(hour / 3600 / 24);
  const hours = Math.floor(hour / 3600) % 24;
  const minutes = Math.floor((hour % 3600) / 60);
  const seconds = Math.floor(hour) % 60;
  return (
    <div>
      <h1>Hello</h1>
      days:{days} Hours:{hours} min: {minutes} sec: {seconds}
    </div>
  );
}
