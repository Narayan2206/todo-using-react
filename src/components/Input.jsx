import React, { useState } from "react";

function Input({inputValue, handleChange}) {
  return (
    <input
      className=" border-solid border-slate rounded-md border-2 mr-2 sm:w-1/2 w-4/5 px-1 py-0.5 outline-none inline-block"
      type="text"
      spellCheck="false"
      placeholder="Enter your task"
      value={inputValue}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    />
  );
}

export default Input;
