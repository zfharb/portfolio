import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import counterApp from './reducers';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';

// const store = createStore(counterApp);

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);



render(
  <Provider store={createStoreWithMiddleware(counterApp)}> 
    	<App />
  </Provider>,
  document.getElementById('root')
)
