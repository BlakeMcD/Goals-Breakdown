import React from 'react';
import { useState } from 'react';

function SubBlock() {
    const [text, setText] = useState("Type Here")

    //functions
    const handleOnChangeText = (event) => {
        if (text === "Type Here") {
            setText("");
        }
        else {
        setText(event.target.value);
        }
    }


    //return value
  return <div className="sub-block block-year">
    <h3 className = "sub-block-label">Fitness</h3>

    <input className="block__text-input" type="text" value={text} onChange={handleOnChangeText}></input>
    <p>{text}</p>
  </div>;
}

export default SubBlock;
