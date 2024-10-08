import { useEffect, useState } from 'react';
// import Header from './component/header/Header';
import './App.css';

export default function App() {
  const nextYear = new Date('1/1/2025');
  const dateOfToday = new Date();
  const totalInSeconds = Math.floor((nextYear - dateOfToday) / 1000);

  const initialState = totalInSeconds;

  const [selectedDate, setSelectedDate] = useState('');

  const [hour, setHour] = useState(initialState);

  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const [countdown, setCountdown] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedDate || !description || !title) {
      alert('Please fill in both fields.');
      return;
    }

    const date = new Date(selectedDate);

    const now = new Date();

    const totalSecond = Math.floor((date - now) / 1000);

    if (totalSecond < 0) {
      clearInterval(hour);
      alert('Countdown completed!');
      return;
    }
    const newItem = {
      title,
      description,
      id: Date.now(),
      hour,
    };

    setHour(totalSecond);
    setCountdown([newItem]);
    setTitle('');
    setDescription('');
    setSelectedDate('');
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
        <h1 className="aside-one-title">Coming Soon.. </h1>

        {countdown.map((count) => {
          return (
            <div key={`count-${count.id}`} className="countdown-message">
              <h1 className="title">{count.title}</h1>
              <h2 className="descr">{count.description}</h2>
            </div>
          );
        })}

        <div className="countdown-wrapper">
          <div className="countdown-number">
            <span> {days || '00'}</span>
            <p>Days</p>
          </div>

          <div className="countdown-number">
            <span> {hours || '00'}</span>
            <p>Hours</p>
          </div>

          <div className="countdown-number">
            <span> {minutes || '00'}</span>
            <p>minutes</p>
          </div>

          <div className="countdown-number">
            <span> {seconds || '00'}</span>
            <p>seconds</p>
          </div>
        </div>
      </div>

      <div className="aside-two">
        <h1 className="aside-two-title">Create your Countdown</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            onChange={(e) => setSelectedDate(e.target.value)}
            value={selectedDate}
          />
          <input
            placeholder="Countdown title:"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <button>Create Countdown</button>
        </form>
      </div>
    </div>
  );
}
