import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';

// import rootReducer from './reducers/rootReducer';

//ACTION - gives words to the different types of state changes. 
//all an action is is a function that returns an object
// const addItem = () => {
//   return {
//     type: 'ADD_ITEM'
//   }
// }

// const deleteItem = () => {
//   return {
//     type: 'DELETE_ITEM'
//   }
// }

//REDUCER - makes changes to the state. 
// const changeItem = (state = [], action) => {
//   switch(action.type){

//     case 'ADD_ITEM':
//       console.log("added an item");
//       return "added a new item";
//     case 'DELETE_ITEM':
//       console.log("deleted an item");
//       return "deleted an item";

//   }
// }

//STORE - globalized state.
const store = createStore(rootReducer);

//DISPATCH - sends action to reducer. kicks things off. 
// store.dispatch(addItem());
// store.dispatch(deleteItem());
// store.dispatch(deleteItem());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

