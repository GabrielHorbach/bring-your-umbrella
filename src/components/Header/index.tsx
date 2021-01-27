import { ReactComponent as SunnyIcon } from 'assets/icons/sunny.svg';
import Card from 'components/Card';

import useGeolocation from 'services/Geolocation/hooks/useCityFromGeolocation';
import { getCurrentDateAndTime, getGreetingBasedOnPeriodOfTheDay } from 'utils/date';

import * as S from './styles';

function Header() {
  const city = useGeolocation();

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
            <S.Temperature>30°C</S.Temperature>
            <S.DayStatus>Dia ensolarado</S.DayStatus>
          </S.Row>
        </S.Column>
        <S.Column>
          <S.Row align="end"><SunnyIcon width="4.5rem" /></S.Row>
          <S.Row align="end">
            <S.TomorrowStatus>Amanhã 25°C / 28°C</S.TomorrowStatus>
          </S.Row>
        </S.Column>
      </Card>
    </S.Header>
  );
}

export default Header;
