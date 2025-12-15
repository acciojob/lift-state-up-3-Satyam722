import React, { useState } from "react"
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
function App(){
  const [selectedOption, setSelectedOption]=useState("");
  const handleOptionSelect=(option)=>{
    setSelectedOption(option)
  }
  return(
    <div style={{backgroundColor:"green"}}>
      <h1>Parent Component</h1>
<ChildComponent1 onSelect={handleOptionSelect} />
<ChildComponent2 onSelect={handleOptionSelect}/>

  <p>Selected Option: {selectedOption || ""}</p>

    </div>
  )
}

export default App;
