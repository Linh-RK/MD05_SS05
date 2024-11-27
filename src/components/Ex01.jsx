import React, { createContext, useState, useContext } from "react";
import Ex02 from "./Ex02";
import Ex03 from "./Ex03";

export const ThemeContext = createContext();
export default function Ex01() {
  const [color, setColor] = useState("blue");

  const handleChangeColor = (c) => {
    setColor(c);
  };
  return (
    <ThemeContext.Provider value={{ color, handleChangeColor }}>
      <Ex02></Ex02>
      <Ex03></Ex03>
    </ThemeContext.Provider>
  );
}
