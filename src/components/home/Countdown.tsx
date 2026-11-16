'use client';

import { useEffect, useState } from 'react';

// Update this date when the next competition date is announced.
const COMPETITION_DATE = '2027-08-24T10:00:00+03:00';
const initial = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export function Countdown() {
  const [time, setTime] = useState(initial);

  useEffect(() => {
    const update = () => {
      const remaining = Math.max(0, new Date(COMPETITION_DATE).getTime() - Date.now());
      setTime({
        days: Math.floor(remaining / 86_400_000),
        hours: Math.floor((remaining / 3_600_000) % 24),
        minutes: Math.floor((remaining / 60_000) % 60),
        seconds: Math.floor((remaining / 1_000) % 60),
      });
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="countdown" aria-label="Час до конкурсу">
      {Object.entries(time).map(([unit, value]) => (
        <span key={unit}><strong>{String(value).padStart(2, '0')}</strong><small>{{ days: 'днів', hours: 'год', minutes: 'хв', seconds: 'сек' }[unit as keyof typeof time]}</small></span>
      ))}
    </div>
  );
}
