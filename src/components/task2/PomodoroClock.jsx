import React, { useState } from "react";
import { Alert } from "react-bootstrap";

// component import
import Timer from "./Timer";

// pomodoro component
const PomodoroClock = () => {

  /** state to switch from input field to timer component */
  const [showInputField, setShowInputField] = useState(true);
  /** state to set number of sessions */
  const [noOfSessions, setNoOfSession] = useState(0);
  /** state to validate input fields */
  const [inputFieldError, setInputFieldError] = useState(false);

  /** function called onClick of Submit */
  const handleSubmit = () => {
    if (noOfSessions === 0 || noOfSessions === '') {
      setShowInputField(true);
      setInputFieldError(true);
    } else {
      setShowInputField(false);
      setInputFieldError(false);
    }
  };

  return (
    <div>
      <h1 className="text-center">Pomodoro Clock</h1>&nbsp;&nbsp;&nbsp;&nbsp;
      {showInputField ? (
        <div className="pomodoro-container">
          <div className="card" style={{ width: "400px" }}>
            <div className="card-body">
              <h4 className="card-title text-left">Enter number of sessions</h4>
              <input
                type="email"
                className="form-control"
                value={noOfSessions}
                onChange={(e) => setNoOfSession(e.target.value)}
                placeholder="Enter number of sessions"
                id="noOfSessions"
              />
              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
          {inputFieldError && (
            <Alert
              variant="danger"
              style={{ width: "400px", marginTop: "20px" }}
            >
              Please enter input greater than 0
            </Alert>
          )}
        </div>
      ) : (
        <Timer noOfSessions={noOfSessions} />
      )}
    </div>
  );
};
export default PomodoroClock;
