import React from "react";
import { Button } from "react-bootstrap";

const Session = (props) => {
  return (
    <div className="session-container">
      <h2 id="session-label">Session Length</h2>
      <div className="button-container">
        <Button
          variant="outline-primary"
          id="session-increment"
          onClick={props.incrementSession}
        >
          +
        </Button>
        <h2 id="session-length" style={{ margin: 0 }}>
          {props.sessionLength}
        </h2>

        <Button
          variant="outline-primary"
          id="session-decrement"
          onClick={props.decrementSession}
        >
          -
        </Button>
      </div>
    </div>
  );
};

export default Session;
