import React from "react";
import useThemeStore from "../store/store.js";

function Footer() {
  const year = new Date().getFullYear();
  const currentTheme =  useThemeStore((state) => state.currentTheme);

  return (
    <>
      <footer className={`text-center text-sm text-white ${ currentTheme === "light" ? "bg-blue-700" : "bg-blue-950"} py-5` } >Copyright &copy; {year}. ToDo List by Narayan Pal.</footer>
    </>
  );
}

export default Footer;
