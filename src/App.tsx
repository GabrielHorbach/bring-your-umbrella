import { GlobalStyles } from 'styles/global';

import Container from 'components/Container';
import Header from 'components/Header';
import Advice from 'components/Advice';

import { WeatherProvider } from 'contexts/WeatherContext';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <WeatherProvider>
          <Header />
          <Advice />
        </WeatherProvider>
      </Container>
    </>
  );
}

export default App;
