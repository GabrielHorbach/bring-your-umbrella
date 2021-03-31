import { useEffect, useState } from 'react';

import { GeolocationCoordinates, GeolocationPosition, GeolocationPositionError } from '../@types';
import getCity from '..';

export default function useGeolocation() {
  const [city, setCity] = useState('');
  const [coordenates, setCoordenates] = useState<GeolocationCoordinates>(
    {} as GeolocationCoordinates,
  );

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = async (position: GeolocationPosition) => {
      const { coords } = position;
      const cityFromAPI = await getCity(coords.latitude, coords.longitude);
      setCoordenates(coords);
      setCity(cityFromAPI);
    };

    function error(err: GeolocationPositionError) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return { city, coordenates };
}
