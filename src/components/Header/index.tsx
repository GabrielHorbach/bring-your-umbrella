import { ReactComponent as SunnyIcon } from 'assets/icons/sunny.svg';
import Card from 'components/Card';

import { getCurrentDateAndTime } from 'utils/date';

import * as S from './styles';

function Header() {
  return (
    <S.Header>
      <S.Greeting>Bom dia!</S.Greeting>
      <Card>
        <S.Column>
          <S.Row>
            <S.CityLabel>Canoas</S.CityLabel>
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
