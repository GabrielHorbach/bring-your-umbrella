import React from 'react';
import * as S from './styles';

type ContainerProps = {
  children: React.ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

export default Container;
