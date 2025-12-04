import React from 'react';

const ChildComponent2 = ({ onOptionSelect, selectedOption }) => {
  const options = ["Option 2A", "Option 2B", "Option 2C"];

  return (
    <div className="child-component">
      <h2>Child Component 2</h2>
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

export default ChildComponent2;
