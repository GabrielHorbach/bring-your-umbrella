import Card from 'components/Card';
import { ReactComponent as UmbrellaIcon } from 'assets/icons/umbrella.svg';

import * as S from './styles';

export default function Advice() {
  return (
    <Card>
      <S.Message>Você não precisa levar o guarda chuva hoje!</S.Message>
      <UmbrellaIcon width="3.5rem" />
    </Card>
  );
}
