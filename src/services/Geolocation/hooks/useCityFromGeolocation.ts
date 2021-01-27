import { useEffect, useState } from 'react';

import { GeolocationPosition, GeolocationPositionError } from '../@types';
import getCity from '..';

export default function useCityFromGeolocation() {
  const [city, setCity] = useState('');

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = async (position: GeolocationPosition) => {
      const { coords } = position;
      const cityFromAPI = await getCity(coords.latitude, coords.longitude);
      setCity(cityFromAPI);
    };

    function error(err: GeolocationPositionError) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return city;
}
