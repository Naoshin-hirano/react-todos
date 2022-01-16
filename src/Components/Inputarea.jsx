// import "./styles.css";
import React from "react";

export default function Inputarea(props) {
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
  };

  return (
    <div style={style}>
      <input
        value={props.text}
        onChange={props.handleChange}
        type="text"
      ></input>
      <button onClick={props.addTodoList}>追加</button>
    </div>
  );
}
