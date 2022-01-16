import "./styles.css";
import React, { useState } from 'react';
import Complete from './Components/Complete';
import Incomplete from './Components/Incomplete';
import Inputarea from './Components/Inputarea';

export default function App() {
  const [text, setText] = useState('');

  const [incompleteList, setIncomplete] = useState(['Hello world1', 'Hello world2']);
  const [completeList, setComplete] = useState(['Hello world3']);

  const handleChange = (event) => {
    setText(()=> event.target.value)
  };

  const addTodoList = () => {
    //なぜスプレッド構文にする必要があるか：　
    //スプレッド構文がないと配列の中に配列が入ることになるので、スプレッド構文で配列の中身だけ取り出してる
    const newTodos = [...incompleteList, text]
    setIncomplete(newTodos)
    setText('')
  };

  const deleteList = (index) => {
    const newTodos = [...incompleteList]
    newTodos.splice(index, 1);
    setIncomplete(newTodos)
  };

  const intoComplete = (index) => {
    //未完了のTODOから削除
    const newTodos = [...incompleteList]
    newTodos.splice(index, 1);
    setIncomplete(newTodos)

    //完了済みのTODOへ追加
    const newCompTodos = [...completeList, incompleteList[index]]
    setComplete(newCompTodos)
  };

  const backToIncomplete = (index) => {
    //完了のTODOから削除
    const newTodos = [...completeList]
    newTodos.splice(index, 1);
    setComplete(newTodos)

    //未完了のTODOへ追加
    const newIncomplete = [...incompleteList, completeList[index]]
    setIncomplete(newIncomplete)
  };

  return (
    <div>
      <Inputarea 
      text={text}
      handleChange={handleChange}
      addTodoList={addTodoList}/>
      <Incomplete
      list={incompleteList}
      intoComplete={intoComplete}
      deleteList={deleteList}/>
      <Complete
      list={completeList}
      backToIncomplete={backToIncomplete}/>
    </div>
  );
}
