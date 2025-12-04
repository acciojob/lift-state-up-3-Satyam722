import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';
import './../styles/App.css';

function App() {
  // State as per requirements
  const [selectedOption, setSelectedOption] = useState("");

  // Handler to update state from child components
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div id="main">
      <h1>Parent Component</h1>
      <p>Selected Option: <strong>{selectedOption || "None"}</strong></p>
      
      <div className="child-container">
        <ChildComponent1 
          onOptionSelect={handleOptionSelect} 
          selectedOption={selectedOption}
        />
        
        <ChildComponent2 
          onOptionSelect={handleOptionSelect} 
          selectedOption={selectedOption}
        />
      </div>
    </div>
  );
}

export default App;
