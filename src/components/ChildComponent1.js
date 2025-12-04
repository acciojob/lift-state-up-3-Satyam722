import React from "react";
const ChildComponent1 = ({ onSelect }) => {
  return (
    <div className="child child1">
      <h2>Child Component 1</h2>
      <button className="btn" onClick={() => onSelect("Option 1")}>
        Option 1
      </button>
    </div>
  );
};

export default ChildComponent1;
