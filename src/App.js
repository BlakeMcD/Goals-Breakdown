import './App.css';
import './components/BlockYear'
import BlockYear from './components/BlockYear';
import React, { useState } from 'react';

function App() {

  //CONSTANTS
  let baseYear = 2022;

  //STATE
  const [years, setYears] = useState(["2022"]);

  //FUNCTIONS
  const addBlockYear = () => {
    const mostRecentYear = baseYear+(years.length)
    setYears([...years, mostRecentYear]);
  }

  // const modifyText = (event) => {
  //   setText(event.target.value);
  //   event.preventDefault();
  // }

  const returnYears = () => {
    
    let allYears = [];
    for (let i = 0; i < years.length; i++) {
      allYears.push(<BlockYear key={`${i}`} name={years[i]}/>)
    } 
    return allYears;
  }


  //RETURN VALUE
  return (
    <div>
      {returnYears()}
      <button onClick={addBlockYear}>Add Another Year</button>
    </div>
  );
}

export default App;
