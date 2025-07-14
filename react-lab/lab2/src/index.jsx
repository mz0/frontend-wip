import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './Gallery';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(<App />);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
