// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Home from './App';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>
// );




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Change Home to App to match your component name
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);