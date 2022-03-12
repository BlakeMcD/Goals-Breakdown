import React from 'react'

function CategoryIcon(props) {
    return (
      <div>
        <button onClick={() => props.handleCategoryNameChange(props.categoryName)}>Category Icon for {props.categoryName}</button>
      </div>
    )
  }

export default CategoryIcon