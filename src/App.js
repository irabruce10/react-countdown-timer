import { useEffect, useState } from 'react';

export default function App() {
  const [newDate, setNewDate] = useState('');

  const [hour, setHour] = useState();

  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!newDate || !description) {
      alert('Please fill in both fields.');
      return;
    }

    const a = document.createElement('h1');
    a.textContent = description;
    document.body.appendChild(a, 'countdown');
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
      <h1>Countdown Timer</h1>
      days:{days || 0} Hours:{hours || 0} min: {minutes || 0} sec:{' '}
      {seconds || 0}
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setNewDate(e.target.value)}
          value={newDate}
          type="date"
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Click to submit</button>
      </form>
    </div>
  );
}
