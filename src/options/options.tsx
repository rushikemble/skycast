import React from 'react';
import { createRoot } from 'react-dom/client';

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1>Hello Chrome from options!</h1>
    </div>
  );
};

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(<App />);
