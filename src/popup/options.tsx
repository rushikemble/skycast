import React from 'react';
import { createRoot } from 'react-dom/client';
import './popup.css';

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1>Hello Chrome!</h1>
    </div>
  );
};

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(<App />);
