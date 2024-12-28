import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  getStoredOptions,
  LocalStorage,
  LocalStorageOptions,
  setStoredOptions,
} from '../utils/storage';

const App: React.FC<{}> = () => {
  const [homeCity, setHomeCity] = useState<string>('');
  const [options, setOptions] = useState<LocalStorageOptions | null>(null);

  useEffect(() => {
    getStoredOptions().then((options) => {
      setOptions(options);
    });
  }, []);

  const handleHomeCitySave = () => {
    setStoredOptions({ ...options, homeCity }).then(() => {
      setHomeCity('');
    });
  };
  if (!options) {
    return null;
  }
  return (
    <Box mx='10%' my='2%'>
      <Card>
        <CardContent>
          <Grid container>
            <Grid size={12}>
              <Typography variant='h4'>Weather extension options</Typography>
            </Grid>
            <Box sx={{ marginTop: '16px' }}>
              <Typography variant='body1'>Home city name</Typography>
            </Box>
            <Grid size={12}>
              <Box
                component='form'
                sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
              >
                <TextField
                  id='outlined-controlled'
                  variant='standard'
                  fullWidth
                  placeholder='Enter home city name'
                  value={homeCity}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setHomeCity(event.target.value);
                  }}
                />
                <Grid size={4}>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleHomeCitySave}
                  >
                    Save
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(<App />);
