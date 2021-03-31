import { useEffect, useState } from 'react';
import { GeolocationCoordinates } from 'services/Geolocation/@types';

import getWeather from '..';
import { WeatherAPIResponse } from '../@types';

export default function useWeather(coordenates: GeolocationCoordinates) {
  const [weather, setWeather] = useState<WeatherAPIResponse>();

  const { latitude, longitude } = coordenates;

  useEffect(() => {
    getWeather(latitude, longitude)
      .then((whetherData) => setWeather(whetherData));
  }, []);

  return weather;
}
