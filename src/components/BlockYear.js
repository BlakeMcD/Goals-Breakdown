import React from 'react';
import SubBlock from './SubBlock';
import SubBlockCreate from './SubBlockCreate';

function BlockYear() {

//return value
  return (
  <div className="block block-year">
    <h3 className = "block-label">2022</h3>
    <SubBlock/>
    <SubBlockCreate/>
  </div>
  );
}

export default BlockYear;
