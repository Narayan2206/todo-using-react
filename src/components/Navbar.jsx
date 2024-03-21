import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import useThemeStore from "../store/store.js";

function Navbar(){

  const currentTheme =  useThemeStore((state) => state.currentTheme);
  const changeCurrentTheme = useThemeStore((state) => state.changeCurrentTheme);

  function toggleTheme(){
    if( currentTheme === "light")
    {
      changeCurrentTheme("dark");
    } else {
      changeCurrentTheme("light");
    }
  }

    return <nav className={`font-poppins text-3xl font-bold ${ currentTheme === "light" ? "bg-blue-700" : "bg-blue-950"} text-white py-3 px-8 flex justify-between`}>
      <h1>To-Do</h1>
      <div className="cursor-pointer" onClick={()=>{toggleTheme()}}>
      { currentTheme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode /> }
      </div> 
    </nav>;
}

export default Navbar;