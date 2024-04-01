import React from "react";
import Button from "./Button";
import { FaCheck } from "react-icons/fa";
import useThemeStore from "../store/store.js";
import { ACTIONS } from "./Container.jsx";

function ToDo({ task, id, isCompleted, dispatch }) {
  const currentTheme = useThemeStore((state) => state.currentTheme);

  function handleClick(e) {
    if (e.target.tagName !== "BUTTON") {
      dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id}});
    }
  }

  function toggleCompletedColor() {
    if (currentTheme === "light") {
      return isCompleted ? "bg-gray-300" : "bg-white";
    } else {
      return isCompleted ? "bg-blue-950" : "bg-[#111827]";
    }
  }

  return (
    <div
      className={` mb-2 flex items-center justify-between px-4 py-2 rounded-md cursor-pointer ${toggleCompletedColor()} `}
      onClick={handleClick}
    >
      <p className={`text-lg ${isCompleted && "line-through"} `}>{task}</p>
      <div className=" flex items-center">
        <span className="mr-4 text-xl">{isCompleted && <FaCheck />}</span>
        <Button type={"Delete"} dispatch={dispatch} id={id} mRight={""} />
      </div>
    </div>
  );
}

export default ToDo;
