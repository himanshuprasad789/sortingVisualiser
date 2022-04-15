import React, { useState, useEffect } from "react";
import "./App.css";
import newArray from './utils/newArray'
import Bar from "./components/bar";
import Header from "./components/header";
function App() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(100);
  useEffect(() => {
    const newarr=newArray(arraySize);
    setArray(newarr);
  }, [arraySize]);
  
  const handleChange=(e)=>{
    setArraySize(e.target.value);
    console.log(arraySize)
  }
  console.log(array)
  return (
    <div className="App">
      <Header array={array}  setArray={setArray} arraySize={arraySize} handleChange={handleChange}/>
      <div className="container">
        {array.map((num, id) => {
          return <Bar key={id} len={num*5} />;
        })}
      </div>
    </div>
  );
}

export default App;
