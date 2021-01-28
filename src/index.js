import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AsotProvider } from './ASOT1000/context';

ReactDOM.render(
  <React.StrictMode>
    <AsotProvider>
      <App />
    </AsotProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
