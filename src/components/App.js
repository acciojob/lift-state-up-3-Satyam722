import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';
import './../styles/App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div id="main" className="parent">
      <h2>Parent Component</h2>
      <p id="selectedOption">Selected Option: {selectedOption}</p>
      
      <ChildComponent1 onButtonClick={handleOptionChange} />
      <ChildComponent2 onButtonClick={handleOptionChange} />
    </div>
  );
}

export default App;
