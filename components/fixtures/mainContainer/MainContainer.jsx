import React from 'react';
import Hero from 'react-bulma-components/src/components/hero';
import Container from 'react-bulma-components/src/components/container';
import Content from 'react-bulma-components/src/components/container';
import Footer from 'react-bulma-components/src/components/container';
import Nav from '../nav';

import './MainContainer.module.scss';

const MainContainer = ({ children }) => {
  return (
    <Hero size="fullheight">
      <Hero.Head>
        <Nav />
      </Hero.Head>
      <Hero.Body className="main-container-body">
        <Container>
          {children}
        </Container>
      </Hero.Body>
      <Hero.Footer>
        <Footer>
          <Container>
            <Content style={{ textAlign: 'center' }}>
              <img className="logo" src="/logo-text-cut-down.png" alt="AquaHobby: Your source for all things aquarium" height="40" />
              established in 2020
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>
    </Hero>
  )
}

export default MainContainer;
