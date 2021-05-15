import React from "react";
import Button from "./Button";

const TextBox = ({ label, value, onChange, addElementsToList, listName, duplicateEntryValidation }) => {
  return (
    <>
      <h4 className="card-title text-left">{label}</h4>
      <div className="textbox-container">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value.toUpperCase())}
          type="text"
          className="form-control"
          placeholder="Start entering..."
        />
        <div>
            <Button label="Add" onClick={() => addElementsToList(value, listName)} />
        </div>
      </div>
      <div className="validation-alert">
        {duplicateEntryValidation !== '' && <p>{duplicateEntryValidation}</p>}
      </div>
    </>
  );
};
export default TextBox;
