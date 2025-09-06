import { useEffect, useState } from 'react';

export function useTimer(limitTime: number, onFinish?: () => void) {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  console.log('timeleft', timeLeft, 'isrunning', isRunning);

  useEffect(() => {
    if (!isRunning || timeLeft >= limitTime) {
      if (timeLeft >= limitTime && onFinish) onFinish();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isRunning, onFinish]);

  return { timeLeft, isRunning, setIsRunning };
}
