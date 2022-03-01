import React, { useState } from 'react'

function BlockItem(props) {

    //STATES
    const [itemText, setItemText] = useState("Click to add text");

    //FUNCTIONS
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        setItemText(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={itemText} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default BlockItem


// import React, { useState } from 'react'; 

// function BlockCategory() {

//     //STATES
//     const [items, setItems] = useState([]);
//     const [category, setCategory] = useState("Category");

//     //FUNCTIONS
//     const addBlockItem = () => {
//         setItems([...items, "item"]);
//       }

//     const returnItems = () => {
//         let allItems = [];
//         for (let i = 0; i < items.length; i++) {
//         allItems.push(<p key={i} className="sub-block-create">This is an Item</p>)
//         } 
//         return allItems;
//     }

//     const handleChange = (event) => {
//       setCategory(event.target.value);
//     };

//     const handleSubmit = (event) => {
//       event.preventDefault();
//     }

//   return (
//     <div className="block-category">
//         <h3>{category}</h3>
//         <form onSubmit={handleSubmit}>
//           <input type="text" value={category} onChange={handleChange}/>
//         </form>
//         {returnItems()}
//         <button onClick={addBlockItem}>Add an Item</button>
//     </div>
//   )
// }

// export default BlockCategory

