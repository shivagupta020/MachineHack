import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

// Create the root element
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Render the app with createRoot
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);