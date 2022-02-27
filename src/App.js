import './App.css';
import './components/BlockYear'
import BlockYear from './components/BlockYear';
import React, { useState } from 'react';

function App() {

  //CONSTANTS
  let blockyear = 2022;

  //STATE
  const [years, setYears] = useState([blockyear]);

  //FUNCTIONS
  const addBlockYear = () => {
    blockyear += 1;
    setYears([...years, blockyear]);
  }

  const returnYears = () => {
    
    let allYears = [];
    for (let i = 0; i < years.length; i++) {
      allYears.push(<BlockYear key={`${i}`}/>)
    } 
    return allYears;
  }

  return (
    <div>
      {returnYears()}
      <button onClick={addBlockYear}>Add Another Year</button>
    </div>
  );
}

export default App;
