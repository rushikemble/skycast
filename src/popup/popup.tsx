import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './popup.css';
import WeatherCard from './WeatherCard';
import '@fontsource/roboto/500.css';
import Paper from '@mui/material/Paper';
import { InputBase, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid2';
import { setStoredCities, getStoredCities } from '../utils/storage';

const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<string[]>([]);
  const [cityInput, setcityInput] = useState<string>('');

  useEffect(() => {
    getStoredCities().then((cities) => {
      if (Array.isArray(cities)) {
        setCities(cities);
      }
    });
  }, []);

  const handleCityButtonClick = () => {
    if (cityInput.trim() === '') return;
    const updatedCities = [...cities, cityInput];
    setStoredCities(updatedCities).then(() => {
      setCities(updatedCities);
      setcityInput('');
    });
  };

  const handleCityDelete = (index: number) => {
    cities?.splice(index, 1);
    const updatedCities = [...cities];
    setStoredCities(updatedCities).then(() => {
      setCities(updatedCities);
    });
  };

  return (
    <Box mx='8px' my='16px'>
      <Grid container>
        <Grid size={12}>
          <Paper
            component='form'
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder='Add a city name'
              value={cityInput}
              onChange={(event) => setcityInput(event?.target?.value)}
            />
            <IconButton
              type='button'
              sx={{ p: '10px' }}
              onClick={handleCityButtonClick}
            >
              <AddIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      {cities?.map((city, index) => (
        <WeatherCard
          city={city}
          key={index}
          onDelete={() => handleCityDelete(index)}
        />
      ))}
      <Box height='16px' />
    </Box>
  );
};

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(<App />);
