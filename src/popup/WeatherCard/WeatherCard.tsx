import React, { useEffect, useState } from 'react';
import { fetchWeatherData, OpenWeatherData } from '../../utils/api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Typography, CardActions, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const WeatherCardContainer: React.FC<{
  children: React.ReactNode;
  onDelete?: () => void;
}> = ({ children, onDelete }) => {
  return (
    <Box mx={'4px'} my={'16px'}>
      <Card>
        <CardContent>{children}</CardContent>
        <CardActions>
          {onDelete && (
            <Button
              variant='outlined'
              startIcon={<DeleteIcon />}
              onClick={onDelete}
            >
              Delete
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};
type WeatherCardState = 'loading' | 'error' | 'ready';
const WeatherCard: React.FC<{ city: string; onDelete?: () => void }> = ({
  city,
  onDelete,
}) => {
  const [weatherData, setWeatherData] = useState<OpenWeatherData | null>(null);
  const [cardState, setCardState] = useState<WeatherCardState>('loading');
  useEffect(() => {
    fetchWeatherData(city)
      .then((data) => {
        setWeatherData(data);
        setCardState('ready');
      })
      .catch((error) => {
        console.error(error);
        setCardState('error');
      });
  }, [city]);

  if (cardState === 'error' || cardState === 'loading') {
    return (
      <WeatherCardContainer onDelete={onDelete}>
        <Typography variant='body1'>
          {cardState == 'loading'
            ? 'Loading...'
            : 'Error could not retrieve weather data for the city'}
        </Typography>
      </WeatherCardContainer>
    );
  }

  return (
    <WeatherCardContainer onDelete={onDelete}>
      <Typography variant='h5'>{weatherData?.name}</Typography>
      <Typography variant='body1'>{weatherData?.main?.temp}</Typography>
      <Typography variant='body1'>
        Feels like: {weatherData?.main?.feels_like}
      </Typography>
    </WeatherCardContainer>
  );
};

export default WeatherCard;
