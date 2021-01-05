import MainContainer from '../components/fixtures/mainContainer';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  );
}

export default MyApp
