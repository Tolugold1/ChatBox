import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css"
import App from './App';
import { Provider } from 'react-redux';
import { ConfigureStore } from "../src/Redux/configureStore"

const store = ConfigureStore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
