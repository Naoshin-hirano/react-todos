// import "./styles.css";
import React from "react";

export default function Incomplete(props) {
  const style = {
    backgroundColor: "#c6ffe2",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        {props.list.map((todo, index) => {
          return (
            <li key={index}>
              <div style={{ display: "flex" }}>
                <p>{todo}</p>
                <button onClick={() => props.intoComplete(index)}>完了</button>
                <button onClick={() => props.deleteList(index)}>削除</button>
              </div>
            </li>
          );
        })}
        ;
      </ul>
    </div>
  );
}
