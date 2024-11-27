import React, { useContext } from "react";
import { ThemeContext } from "./Ex01";

export default function Ex03() {
  const { color, handleChangeColor } = useContext(ThemeContext);
  return (
    <>
      <div>Giá trị khởi tạo là: {color}</div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={() => handleChangeColor("red")}
      >
        Click me
      </button>
      <hr />
    </>
  );
}
