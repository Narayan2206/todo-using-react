import React, { useState } from "react";
import useThemeStore from "../store/store.js";

function Input({inputValue, handleChange}) {
  const currentTheme =  useThemeStore((state) => state.currentTheme);

  return (
    <input
      className={`border-solid rounded-md border-2 mr-2 sm:w-1/2 w-4/5 px-1 py-0.5 outline-none inline-block ${ currentTheme === "dark" && "bg-[#111827] text-white" } `}
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
