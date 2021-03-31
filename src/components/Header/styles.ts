import styled from 'styled-components';

type RowProps = {
  align?: string;
}

export const Header = styled.header`
  width: 100%;
`;

export const Greeting = styled.h1`
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 4rem;
  margin-top: 2rem;
  text-align: center;
`;

export const Column = styled.div`
  width: 50%;
  height: 100%;
`;

export const Row = styled.div<RowProps>`
  width: 100%;
  height: 50%;
  position: relative;

  ${(props) => {
    if (props.align === 'bottom') {
      return `
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      `;
    }

    if (props.align === 'end') {
      return `
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
      `;
    }

    return '';
  }}

  svg {
    position: absolute;
    top: -5%;
  }
`;

export const CityLabel = styled.p`
  font-size: 1rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: .3rem;
`;

export const DateTime = styled.p`
  font-size: 0.7rem;
  color: #FAC700;
  opacity: .7;
`;

export const Temperature = styled.p`
  font-size: 1.8rem;
  color: #FDC639;
  font-weight: bold;
  margin-bottom: .3rem;
`;

export const DayStatus = styled.p`
  font-size: .7rem;
  color: #e3e3e3;
  text-transform: capitalize;
`;

export const TomorrowStatus = styled.p`
  font-size: .7rem;
  color: #fff;
  opacity: .4;
`;
