import React, { useContext } from "react";
import { ThemeContext } from "./Ex01";

export default function Ex02() {
  const { color, handleChangeColor } = useContext(ThemeContext);

  return (
    <>
      <div>Màu hiện tại: {color}</div>
      <button onClick={() => handleChangeColor("blue")}>
        Đổi sang màu xanh
      </button>
      <hr />
    </>
  );
}
