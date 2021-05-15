import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

// component import
import Session from "./Session";
import Break from "./Break";

const Timer = ({ noOfSessions }) => {
  /** state to set break and session lengths*/
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  /** state to set timerLabels */
  const [timerLabel, setTimerLabel] = useState("Session Timer");
  const [timerButtonLabel, setTimerButtonLabel] = useState("Start");
  /** state to set seconds left*/
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  /** state to manage timer running */
  const [timerRunning, setTimerRunning] = useState(false);
  /** state to set break timer alert */
  const [breakTimeAlert, setBreakTimeAlert] = useState(false);
  /** state to set cycle count to run the timer */
  const [cycleCount, setCycleCount] = useState(noOfSessions);

  let minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;

  /** sideEffect to stop the timer once cycle count is 0*/
  useEffect(() => {
    if (cycleCount == 0) {
      handleReset();
    }
  }, [cycleCount]);

  /** sideEffect to manage the timer */
  useEffect(() => {
    const handleSwitch = () => {
      if (timerLabel === "Session Timer") {
        setTimerLabel("Break Timer");
        setSecondsLeft(breakLength * 60);
        setBreakTimeAlert(true);
      } else if (timerLabel === "Break Timer") {
        setTimerLabel("Session Timer");
        if (timerRunning && secondsLeft === 0) {
          setCycleCount(cycleCount - 1);
        }
        setSecondsLeft(sessionLength * 60);
        setBreakTimeAlert(false);
      }
    };

    let countdown = null;
    if (timerRunning && secondsLeft > 0) {
      countdown = setInterval(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
    } else if (timerRunning && secondsLeft === 0) {
      countdown = setInterval(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      handleSwitch();
    } else {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [timerRunning, secondsLeft, timerLabel, breakLength, sessionLength]);

  /** method to increment the seesion length */
  const incrementSession = () => {
    if (!timerRunning && sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setSecondsLeft((sessionLength + 1) * 60);
    }
  };

  /** method to decrement the seesion length */
  const decrementSession = () => {
    if (!timerRunning && sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setSecondsLeft((sessionLength - 1) * 60);
    }
  };

  /** method to increment the break length */
  const incrementBreak = () => {
    if (!timerRunning && breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  /** method to decrement the break length */
  const decrementBreak = () => {
    if (!timerRunning && breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  /** method to start/pause the timer onClick of Start button */
  const handleStart = () => {
    setTimerRunning(true);
    setTimerButtonLabel("Pause");
  };

  /** method to stop the timer onClick of Stop button */
  const handleStop = () => {
    setTimerRunning(false);
    setTimerButtonLabel("Start");
  };

  /** method to reset the timer onClick of Reset button */
  const handleReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    setSecondsLeft(25 * 60);
    setTimerLabel("Session Timer");
    setTimerRunning(false);
  };

  return (
    <div className="timer-component">
      <div className="label-container">
        <Session
          sessionLength={sessionLength}
          incrementSession={incrementSession}
          decrementSession={decrementSession}
        />
        <Break
          breakLength={breakLength}
          incrementBreak={incrementBreak}
          decrementBreak={decrementBreak}
        />
      </div>
      {cycleCount === 0 && (
        <h1>
          <em>Congratulations</em> your session is completed
        </h1>
      )}
      <div className="timer-container">
        <h2 id="timer-label">{timerLabel}</h2>
        <h3 id={breakTimeAlert ? "break-timer-left" : "session-timer-left"}>
          {minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:
          {seconds < 10 ? ("0" + seconds).slice(-2) : seconds}
        </h3>
        <div className="mb-2">
          <Button
            variant="primary"
            id="start_stop"
            onClick={timerRunning ? handleStop : handleStart}
          >
            {timerButtonLabel}
          </Button>{" "}
          <Button variant="primary" onClick={handleReset} id="reset">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
