import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Main from './main';


import CounterApp from './store/reducers';
import friends from './store/reducer2';
import {itemsHasErrored,itemsIsLoading,items} from './store/itemsReducer';
const store = createStore(combineReducers({CounterApp,friends,itemsHasErrored,itemsIsLoading,items}), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
