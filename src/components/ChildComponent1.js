import React from "react";

function ChildComponent1({onSelect}){
    return(
        <div style={{width:"500px",height:"100px", backgroundColor:"red"}}>
            <h2>Child Component 1</h2>

          <button onClick={()=>onSelect("Option 1")}>Option1</button>
        </div>
    )
}

export default ChildComponent1;
