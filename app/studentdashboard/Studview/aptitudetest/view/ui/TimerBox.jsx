import { useState, useEffect } from "react";

const TimerBox = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let timer;
    if (timerActive) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          const seconds = prevTime.seconds + 1;
          const minutes = prevTime.minutes + Math.floor(seconds / 60);
          return {
            minutes,
            seconds: seconds % 60,
          };
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [timerActive]);

  // Start the timer when the test is attempted
  const startTimer = () => setTimerActive(true);

  return (
    <div className="bg-white p-4 shadow-lg border border-gray-300 rounded-lg text-gray-800 mt-4">
      <h2 className="text-xl font-semibold text-center mb-2">Timer</h2>
      <div className="text-2xl font-bold text-center">
        {time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}
      </div>
      <button
        onClick={startTimer}
        className="mt-2 bg-purple-600 hover:bg-purple-700 text-white py-1 px-4 rounded"
      >
        Start Timer
      </button>
    </div>
  );
};

export default TimerBox;
