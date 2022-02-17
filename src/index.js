import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';

import actionCreator, { addYear, deleteYear } from './actions/actionCreator';

//REDUCER

//STORE - globalized state.
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//DISPATCH - sends action to reducer. kicks things off. 
store.dispatch(addYear("2022"));
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

