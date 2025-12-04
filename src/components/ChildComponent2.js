import React from 'react';

const ChildComponent2 = ({ setSelectedOption }) => {
  return (
    <div>
      <button onClick={() => setSelectedOption('Option A')}>
        Option A
      </button>
      <button onClick={() => setSelectedOption('Option B')}>
        Option B
      </button>
    </div>
  );
};

export default ChildComponent2;
