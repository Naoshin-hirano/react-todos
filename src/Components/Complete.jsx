// import "./styles.css";
import React from 'react';

export default function Complete(props) {
  return (
    <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          { props.list.map((todo, index) => {
            return (
              <li key={index}>
                <div style={{display: 'flex'}}>
                  <p>{todo}</p>
                  <button onClick={()=> props.backToIncomplete(index)}>戻す</button>
                </div>
              </li>
            );
          })};
        </ul>
    </div>
  );
}

