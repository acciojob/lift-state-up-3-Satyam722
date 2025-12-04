import React from 'react';

const ChildComponent1 = ({ onOptionSelect, selectedOption }) => {
  const options = ["Option 1A", "Option 1B", "Option 1C"];

  return (
    <div className="child-component">
      <h2>Child Component 1</h2>
      <div className="button-group">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onOptionSelect(option)}
            className={selectedOption === option ? 'selected' : ''}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChildComponent1;
