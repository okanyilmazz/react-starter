import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore()

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();