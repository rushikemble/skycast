import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './popup.css';
import { fetchWeatherData } from '../utils/api';

const App: React.FC<{}> = () => {
  useEffect(() => {
    fetchWeatherData('London')
      .then((data) => {
        console.log(data);
        console.log('Temp. is: ', data?.main?.temp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
