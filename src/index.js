import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer';

import { addYear, addYearCategory } from './actions/actionCreator';

//REDUCER

//STORE - globalized state.
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//DISPATCH - sends action to reducer. kic  ks things off. 
store.dispatch(addYear({year: "2022"}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

