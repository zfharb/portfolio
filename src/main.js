import React from 'react';
import { render } from 'react-dom';
import { createStore,  applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import counterApp from './reducers';


const store = createStore(
		counterApp,
);


render(
  <Provider store={store}>
    	<App />

  </Provider>,
  document.getElementById('root')
)
