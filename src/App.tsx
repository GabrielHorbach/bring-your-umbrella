import { GlobalStyles } from 'styles/global';

import Container from 'components/Container';
import Header from 'components/Header';
import Advice from 'components/Advice';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Advice />
      </Container>
    </>
  );
}

export default App;
