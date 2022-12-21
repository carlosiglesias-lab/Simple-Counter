import React, { useEffect, useState } from "react";

const ControlledInputForm = (props) => {
  //     holds the value of the input
  const [currentValue, setValue] = useState("");
  return (
    <div>
      <h2>Your name is: {currentValue ? currentValue : "Not defined"}</h2>

      {/* 
       This is a controlled input because its value is in sync 
       with the stated variable currentValue  
     */}
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={currentValue}
        placeholder="Please type your name"
      />
    </div>
  );
};
ControlledInputForm.propTypes = {};
export default ControlledInputForm;