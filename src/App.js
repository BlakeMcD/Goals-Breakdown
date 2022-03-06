import './App.css';
import './components/BlockYear'
import BlockYear from './components/BlockYear';
import React, { useState } from 'react';
import YearBlock from './components/new_categorisation/YearBlock';
import YearCategory from './components/new_categorisation/YearCategory';
import YearItem from './components/new_categorisation/YearItem';
import MonthBlock from './components/new_categorisation/MonthBlock';


function App() {


  // RETURN VALUE
  return (
    <div>
      <YearBlock/>
      <YearCategory/>
      <YearItem/>
      <MonthBlock/>

    </div>
  );

  
}

export default App;


//  //CONSTANTS
//  let baseYear = 2022;

//  //STATE
//  const [years, setYears] = useState(["2022"]);

//  //FUNCTIONS
//  const addBlockYear = () => {
//    const mostRecentYear = baseYear+(years.length)
//    setYears([...years, mostRecentYear]);
//  }


//  const returnYears = () => {
   
//    const group = "year"
//    let allYears = [];
//    for (let i = 0; i < years.length; i++) {
//      allYears.push(<BlockYear key={`${i}BlockYear`} name={years[i]} blockGroup={group}/>)
//    } 
//    return allYears;
//  }