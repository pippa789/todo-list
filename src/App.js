
import './App.css';
import React, {useState} from "react";

const App = () => {
  //STATE
    const [list, setList] = useState(["laundry"])
    const [inputText, setInputText] = useState("input")
    
    const addHandler = () => {
      let storedList = [...list]
      storedList.push(inputText)
      setList(storedList)
      
   }
  
   const removeHandler = (index) => {
     let storedList = [...list]
     storedList.splice(index, 1)
     setList(storedList)
     
   }
  //  const resetInputfield = () => {
  //    setInputText("");
  //}
   return (
    <div className="App">
        <h1 className="heading">ToDo List</h1>
        {list.map((list, index) => {
            return <h2 className="list" key={index}>{list}
              <button className="buttons" onClick={() => removeHandler (index)}>delete one</button>
            </h2>
  
        })}
        <input className="buttons" type="text" onChange={(event) => setInputText(event.target.value)}/>
  
        <button className="buttons" onClick={addHandler}>add to my todo list</button>
          {/* <input className="buttons" type="text" onInput={resetInputfield}/> */}
    </div>
  )
  }
  export default App
  
