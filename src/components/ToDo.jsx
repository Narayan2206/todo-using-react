import React, { useState } from "react";
import Button from "./Button";
import { FaCheck } from "react-icons/fa";

function ToDo({ task, deleteItem, id , isCompleted, toggleTask}) {

  function handleClick(e) {
    if (e.target.tagName !== "BUTTON") {
      // console.log("i am clicked");
      toggleTask(id);
    }
  }

  return (
    <div
      className={` mb-2 flex items-center justify-between px-4 py-2 rounded-md cursor-pointer ${
        isCompleted ? "bg-gray-300" : "bg-white"
      } `}
      onClick={handleClick}
    >
      <p className={`text-lg ${isCompleted && "line-through"} `}>{task}</p>
      <div className=" flex items-center">
        <span className="mr-4 text-xl">{isCompleted && <FaCheck/>}</span>
        <Button type={"Delete"} deleteItem={deleteItem} id={id} mRight={""} />
      </div>
    </div>
  );
}

export default ToDo;
