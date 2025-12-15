import React from "react";

function ChildComponent2({onSelect}){
    return(
        <div style={{width:"500px",height:"100px", backgroundColor:"yellow"}}>
         <h2>Child Component 2</h2>

         <button onClick={()=>onSelect("Option 2")}>Option 2</button>
        </div>
    )
}

export default ChildComponent2;
