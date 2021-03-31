import Card from 'components/Card';
import { ReactComponent as UmbrellaIcon } from 'assets/icons/umbrella.svg';
import { useWeatherContext } from 'contexts/WeatherContext';

import * as S from './styles';

export default function Advice() {
  const { useUmbrella } = useWeatherContext();

  return (
    <Card>
      <S.Message>
        {useUmbrella
          ? 'Leve seu guarda chuva hoje!'
          : 'Você não precisa levar o guarda chuva hoje!'}
      </S.Message>
      <UmbrellaIcon width="3.5rem" />
    </Card>
  );
}
