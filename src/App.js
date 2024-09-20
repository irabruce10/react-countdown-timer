import { useEffect, useState } from 'react';
import Header from './component/header/Header';
import './App.css';

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
    <div className="timer-container">
      <div className="aside-one">
        <h1>Coming Soon</h1>
        <div className="countdown-wrapper">
          <div className="countdown-number">
            <span> {days || 0}</span>
            <p>Days</p>
          </div>
          <div className="countdown-number">
            <span> {hours || 0}</span>
            <p>Days</p>
          </div>
          <div className="countdown-number">
            <span> {minutes || 0}</span>
            <p>Days</p>
          </div>
          <div className="countdown-number">
            <span> {seconds || 0}</span>
            <p>Days</p>
          </div>
        </div>
      </div>

      <div className="aside-two">
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
    </div>
  );
}
