'use client';

import { useEffect, useState } from 'react';

// Placeholder date: replace when the official competition date is announced.
const targetDate = new Date('2027-11-16T17:30:13Z').getTime();

function remainingTime() {
  const remaining = Math.max(0, targetDate - Date.now());
  return [
    Math.floor(remaining / 86_400_000),
    Math.floor((remaining / 3_600_000) % 24),
    Math.floor((remaining / 60_000) % 60),
    Math.floor((remaining / 1_000) % 60),
  ];
}

export function Countdown() {
  const [time, setTime] = useState<number[] | null>(null);

  useEffect(() => {
    const update = () => setTime(remainingTime());
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <p>Орієнтовний відлік до конкурсу</p>
      <div className="countdown-values" aria-label={time ? `${time[0]} днів, ${time[1]} годин, ${time[2]} хвилин, ${time[3]} секунд` : 'Завантаження відліку'}>
        {['днів', 'годин', 'хвилин', 'секунд'].map((label, index) => (
          <span key={label} aria-hidden="true"><strong>{time ? String(time[index]).padStart(2, '0') : '—'}</strong> {label}</span>
        ))}
      </div>
    </div>
  );
}
