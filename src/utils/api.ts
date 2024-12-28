const OPEN_WEATHER_API_KEY = '9bfd110254929e7238c8eebcd75d52fe';

export interface OpenWeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
    main: string;
    id: number;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
}

export async function fetchWeatherData(city: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const data: OpenWeatherData = await response.json();
  console.log(data);
  return data;
}
