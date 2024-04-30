import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <nav class="nav flex-column">
      <a class="nav-link active" href="#">Home</a>
      <a class="nav-link" href="#">Search</a>
      <a class="nav-link" href="#">Discover</a>
      <a class="nav-link" href="#">My Mix</a>
      <a class="nav-link" href="#">Upload</a>
    </nav>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
