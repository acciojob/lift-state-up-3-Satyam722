import React from 'react';

const ChildComponent1 = ({ setSelectedOption }) => {
  return (
    <div>
      <button onClick={() => setSelectedOption('Option 1')}>
        Option 1
      </button>
      <button onClick={() => setSelectedOption('Option 2')}>
        Option 2  
      </button>
    </div>
  );
};

export default ChildComponent1;
