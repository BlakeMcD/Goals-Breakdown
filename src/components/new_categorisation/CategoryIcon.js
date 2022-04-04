import React from 'react'

function CategoryIcon(props) {

  // console.log("CategoryIcon props:", props)
    return (
      <div className="categoryIcon">
        <button onClick={() => props.iconClickedAddCat(props.categoryName)}>This is the category icon for {props.categoryName}</button>
      </div>
    )
  }

export default CategoryIcon