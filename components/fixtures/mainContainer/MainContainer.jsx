import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import Hero from 'react-bulma-components/src/components/hero';
import Container from 'react-bulma-components/src/components/container';
import Content from 'react-bulma-components/src/components/container';
import Footer from 'react-bulma-components/src/components/container';
import Nav from '../nav';
import HeroBanner from '../heroBanner';

import './MainContainer.module.scss';


const MainContainer = ({ children }) => {
  // This is a hack we need to find a way around this
  const showBanner = () => {
    if (typeof window !== "undefined" && window.location.pathname === '/') {
      return true;
    };

    return false;
  }
  return (
    <Hero size="fullheight">
      <Hero.Head>
        <Nav />
        {showBanner() &&
          <HeroBanner />
        }
      </Hero.Head>
      <Hero.Body className="main-container-body">
        <Container>
          {children}
        </Container>
      </Hero.Body>
      <Hero.Footer>
        <Footer>
          <Container>
            <Content className="content" style={{ textAlign: 'center' }}>
              <img className="logo" src="/h2know.svg" alt="H2know: Your source for all things aquarium" height="40" />
              <div>
                Copyright <FontAwesomeIcon icon={faCopyright} /> text in 2021
              </div>
              <a href='/sitemap.xml'>Sitemap</a>
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>
    </Hero>
  )
}

export default MainContainer;
