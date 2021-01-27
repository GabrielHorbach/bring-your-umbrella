import axios from 'axios';
import { GeolocationDataInterface } from './@types';

const getCity = async (latitude: number, longitude: number) => {
  const url = 'https://api.bigdatacloud.net/data/reverse-geocode-client';
  const params = {
    localityLanguage: 'en',
    latitude,
    longitude,
  };

  try {
    const response = await axios.get<GeolocationDataInterface>(url, { params });
    const { city } = response.data;
    return city;
  } catch (error) {
    console.error(error);
  }

  return '';
};

export default getCity;
