import React from 'react';

const ChildComponent2 = (props) => {
  const handleClick = (option) => {
    props.onButtonClick(option);
  };

  return (
    <div id="child2">
      <h3>Child Component 2</h3>
      <button onClick={() => handleClick('Option A')}>Option A</button>
      <button onClick={() => handleClick('Option B')}>Option B</button>
    </div>
  );
};

export default ChildComponent2;
