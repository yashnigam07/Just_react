import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx'; // Commented out as it's not used

/*function MyApp() {
  return (
    <div><h1>Custom App!</h1></div>
  );
}*/

/*const anotherElement = (
  <h1><a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a></h1>
);*/

const  anotherUser = "Just_react"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank', rel: 'noopener noreferrer' },
  anotherUser


);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {reactElement}
    {/* <App/> */}
  </React.StrictMode>
);

