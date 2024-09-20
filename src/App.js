import { useEffect, useState } from 'react';

export default function App() {
  const [newDate, setNewDate] = useState('');

  const [hour, setHour] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const selectedDate = new Date(newDate);
    console.log(selectedDate);
    const now = new Date();
    console.log(now);

    const totalSecond = Math.floor((selectedDate - now) / 1000);
    console.log(totalSecond);
    setHour(totalSecond);
  }

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
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setNewDate(e.target.value)}
          value={newDate}
          type="date"
        />
        <button type="submit">Click to submit</button>
      </form>
    </div>
  );
}
