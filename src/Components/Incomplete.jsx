// import "./styles.css";
import React from 'react';

export default function Incomplete(props) {
  return (
  <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          { props.list.map((todo, index) => {
            return (
              <li key={index}>
                <div style={{display: 'flex'}}>
                  <p>{todo}</p>
                  <button onClick={() => props.intoComplete(index)}>完了</button>
                  <button　onClick={() => props.deleteList(index)}>削除</button>
                </div>
              </li>
            );
          })};
        </ul>
  </div>
  );
}

