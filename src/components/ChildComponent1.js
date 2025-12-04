import React from 'react';

const ChildComponent1 = (props) => {
  const handleClick = (option) => {
    props.onButtonClick(option);
  };

  return (
    <div id="child1">
      <h3>Child Component 1</h3>
      <button onClick={() => handleClick('Option 1')}>Option 1</button>
      <button onClick={() => handleClick('Option 2')}>Option 2</button>
    </div>
  );
};

export default ChildComponent1;
