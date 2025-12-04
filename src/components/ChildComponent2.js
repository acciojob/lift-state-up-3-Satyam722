import React from "react";

const ChildComponent2 = ({ onSelect }) => {
  return (
     <div className="child child2">
      <h2>Child Component 2</h2>
      <button onClick={() => onSelect("Option 2")}>Option 2</button>
    </div>
  );
};

export default ChildComponent2;
