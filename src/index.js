import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { saveState } from './store'
import { Provider } from "react-redux";
import store from './store';


store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

