import React from 'react'

// function CategoryIcon(props) {
//   return (
//     <button onClick={props.iconSelected}>Icon for: {props.icon}</button>
//   )
// }

function CategoryIcon(props) {
    return (
      <button onClick={() => props.handleCategoryNameChange(props.icon)}>Category Icon for {props.icon}</button>
    )
  }

export default CategoryIcon