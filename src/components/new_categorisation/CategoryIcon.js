import React from 'react'

function CategoryIcon(props) {
    return (
      <div className="categoryIcon">
        <button onClick={() => props.iconClickedAddCatToYear(props.categoryName)}>This is the category icon for {props.categoryName}</button>
        {/* <button onClick={() => props.handleCategoryNameChange(props.categoryName)}>Category Icon for {props.categoryName}</button> */}
      </div>
    )
  }

export default CategoryIcon