import React from 'react';

import * as S from './styles';

type CardProps = {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <S.Card>{children}</S.Card>
  );
}
