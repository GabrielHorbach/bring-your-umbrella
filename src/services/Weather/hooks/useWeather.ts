import { useEffect, useState } from 'react';
import { GeolocationCoordinates } from 'services/Geolocation/@types';

import getWeather from '..';
import { WeatherAPIResponse } from '../@types';

export default function useWeather(coordenates: GeolocationCoordinates) {
  const [weather, setWeather] = useState<WeatherAPIResponse>();

  useEffect(() => {
    const { latitude, longitude } = coordenates;
    if (!latitude || !longitude) return;

    getWeather(latitude, longitude)
      .then((whetherData) => setWeather(whetherData));
  }, [coordenates]);

  return weather;
}
