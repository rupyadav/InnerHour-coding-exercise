import React from "react";
import { Button } from "react-bootstrap";

const Break = (props) => {
  return (
    <div className="break-container">
      <h2 id="break-label">Break Length</h2>
      <div className="button-container">
        <Button
          variant="outline-primary"
          id="break-increment"
          onClick={props.incrementBreak}
        >
          +
        </Button>
        <h2 id="break-length" style={{ margin: 0 }}>
          {props.breakLength}
        </h2>
        <Button
          variant="outline-primary"
          id="break-decrement"
          onClick={props.decrementBreak}
        >
          -
        </Button>
      </div>
    </div>
  );
};

export default Break;
