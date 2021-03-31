import Card from 'components/Card';
import { useWeatherContext } from 'contexts/WeatherContext';
import { useMemo, useEffect } from 'react';

import useGeolocation from 'services/Geolocation/hooks/useGeolocation';
import useWeather from 'services/Weather/hooks/useWeather';
import { getCurrentDateAndTime, getGreetingBasedOnPeriodOfTheDay } from 'utils/date';

import { ReactComponent as SunnyIcon } from 'assets/icons/sunny.svg';
import { ReactComponent as RainingIcon } from 'assets/icons/raining.svg';

import * as S from './styles';

const RAINY_WEATHER = [
  'Thunderstorm',
  'Drizzle',
  'Rain',
  'Snow',
];

function Header() {
  const { city, coordenates } = useGeolocation();
  const weather = useWeather(coordenates);
  const { setUseUmbrella } = useWeatherContext();

  const weatherInfo = useMemo(() => {
    if (!weather) {
      return {
        currentTemperatureLabel: '',
        dayStatusLabel: '',
        tomorrowStatusLabel: '',
        weatherStatus: '',
      };
    }

    const currentTemperatureRounded = Math.round(weather.current.temp);
    const minTemperatureRounded = Math.round(weather.daily[0].temp.min);
    const maxTemperatureRounded = Math.round(weather.daily[0].temp.max);

    const currentTemperatureLabel = `${currentTemperatureRounded} °C`;
    const dayStatusLabel = weather.current.weather[0].description;
    const tomorrowStatusLabel = `Amanhã ${minTemperatureRounded}°C / ${maxTemperatureRounded} °C`;
    const weatherStatus = weather.current.weather[0].main;

    return {
      currentTemperatureLabel,
      dayStatusLabel,
      tomorrowStatusLabel,
      weatherStatus,
    };
  }, [weather]);

  const icon = useMemo(() => (
    RAINY_WEATHER.includes(weatherInfo.weatherStatus)
      ? <RainingIcon />
      : <SunnyIcon />
  ), [weatherInfo]);

  useEffect(() => {
    if (RAINY_WEATHER.includes(weatherInfo.weatherStatus)) setUseUmbrella(true);
  }, [weatherInfo]);

  return (
    <S.Header>
      <S.Greeting>{getGreetingBasedOnPeriodOfTheDay()}</S.Greeting>
      <Card>
        <S.Column>
          <S.Row>
            <S.CityLabel>{city}</S.CityLabel>
            <S.DateTime>
              {getCurrentDateAndTime()}
              h
            </S.DateTime>
          </S.Row>
          <S.Row align="bottom">
            <S.Temperature>{weatherInfo.currentTemperatureLabel}</S.Temperature>
            <S.DayStatus>{weatherInfo.dayStatusLabel}</S.DayStatus>
          </S.Row>
        </S.Column>
        <S.Column>
          <S.Row align="end">
            {icon}
          </S.Row>
          <S.Row align="end">
            <S.TomorrowStatus>{weatherInfo.tomorrowStatusLabel}</S.TomorrowStatus>
          </S.Row>
        </S.Column>
      </Card>
    </S.Header>
  );
}

export default Header;
