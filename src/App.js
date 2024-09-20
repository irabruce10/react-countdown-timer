import { useEffect, useState } from 'react';

export default function App() {
  const newyear = new Date();
  console.log(newyear);
  const [hour, setHour] = useState(6);

  useEffect(() => {
    const interval = setInterval(() => {
      setHour((prevHour) => (prevHour += -1));
      console.log(hour);
      console.log('setInterval');
    }, 1000);

    return () => clearInterval(interval);
  });
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
