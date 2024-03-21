import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import ToDo from "./ToDo";
import useThemeStore from "../store/store.js";
import { v4 as uuidv4 } from "uuid";

function Container() {
  const LOCAL_STORAGE_KEY = "tasks";
  const [inputValue, setInputValue] = useState("");
  const [tasksArr, setTasksArr] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  });

  const currentTheme = useThemeStore((state) => state.currentTheme);

  useEffect(() => {
    //! Update local storage whenever tasksArr changes
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasksArr));
  }, [tasksArr]);

  function handleChange(value) {
    setInputValue(value);
  }

  function addItem(newTask) {
    if (newTask !== "") {
      const newTaskObj = {
        content: newTask,
        id: uuidv4(),
        isCompleted: false,
      };
      setTasksArr((prevTask) => [...prevTask, newTaskObj]);
      setInputValue("");
    }
  }

  function deleteItem(id) {
    setTasksArr((prevTasks) => {
      return prevTasks.filter((task) => {
        return task.id !== id;
      });
    });
  }

  function toggleTask(id) {
    setTasksArr((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      });
    });
  }

  return (
    <>
      <section
        className={`min-h-[88vh] py-6 ${
          currentTheme === "dark" && "bg-[#111827]"
        }`}
      >
        <div
          className={`w-4/5 p-4 min-h-96 mx-auto my-3  border-solid ${ currentTheme === "light" ? "border-blue-700" : "border-blue-950" } border-4 rounded-md font-poppins ${
            currentTheme === "dark" ? "bg-[#252B37]" : "bg-blue-100"
          } `}
        >
          <h2
            className={`text-2xl font-bold text-center ${
              currentTheme === "dark" && "text-white"
            } `}
          >
            Add Your Task Below:
          </h2>
          <div className="flex items-center justify-center mt-2 ">
            <Input inputValue={inputValue} handleChange={handleChange} />
            <Button
              inputValue={inputValue}
              type="Add"
              addItem={addItem}
              mRight={""}
            />
          </div>
          <div className={`mt-6 ${currentTheme === "dark" && "text-white"}`}>
            {tasksArr.length === 0 && (
              <p className="text-center">No tasks today...</p>
            )}
            {tasksArr.map((task) => {
              return (
                <ToDo
                  key={task.id}
                  id={task.id}
                  task={task.content}
                  isCompleted={task.isCompleted}
                  deleteItem={deleteItem}
                  toggleTask={toggleTask}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Container;
