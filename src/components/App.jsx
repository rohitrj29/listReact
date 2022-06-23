import React, { useState } from "react";

function App() {
  const [inputText,setText]=useState("");
  const [items,setItems]=useState([]);

  function handleChange(){
    const val=event.target.value;
    setText(val);
  }
  function handleItems(){
    setItems(prevValue => {
      return [...prevValue, inputText];
    });
    setText(" ");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={handleItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        { items.map(todolist => <li>{todolist}</li>)} 
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
