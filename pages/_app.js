import MainContainer from '../components/fixtures/mainContainer';
import '../styles/globals.scss';

/**
 * Initialize the contentful client here so we can pass it around to the components.
 */
const contentClient = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component
        {...pageProps}
        contentClient={contentClient}
      />
    </MainContainer>
  );
}

export default MyApp
