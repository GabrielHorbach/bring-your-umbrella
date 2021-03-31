import axios from 'axios';
import { WeatherAPIResponse } from './@types';

const getWeather = async (latitude: number, longitude: number) => {
  const url = 'http://api.openweathermap.org/data/2.5/onecall';
  const params = {
    lat: latitude,
    lon: longitude,
    exclude: 'minutely,hourly,alerts',
    units: 'metric',
    lang: 'pt_br',
    appid: process.env.REACT_APP_WEATHER_API_KEY,
  };

  try {
    const { data } = await axios.get<WeatherAPIResponse>(url, { params });
    return data;
  } catch (error) {
    console.error(error);
  }

  return undefined;
};

export default getWeather;
