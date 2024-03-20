import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: string; // The date to count down to, in ISO format (e.g., '2023-12-31')
  onInitialized: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, onInitialized }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        
        // if(!initialized) {
        //   setInitialized(true);
        //   onInitialized()
        // }
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, initialized, onInitialized]);

  return (
    <div className="flex justify-center items-center space-x-4 md:pb-10">
      <div className="pr-4 w-12 md:w-auto text-base md:text-3xl">{timeLeft.days} Days</div>
      <div className="pr-4 w-12 md:w-auto text-base md:text-3xl">{timeLeft.hours} Hours</div>
      <div className="pr-4 w-12 md:w-auto text-base md:text-3xl">{timeLeft.minutes} Minutes</div>
      <div className="pr-4 w-12 md:w-auto text-base md:text-3xl">{timeLeft.seconds} Seconds</div>
    </div>
  );
};

export default CountdownTimer;
