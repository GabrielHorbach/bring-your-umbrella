import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  margin: auto;
  position: relative;
  z-index: -1;
  padding: 1.5rem;

  @media only screen and (min-width: 992px) {
    border-radius: 20px;
    margin-top: 1.5rem;
    max-height: 93%;
  }
`;
