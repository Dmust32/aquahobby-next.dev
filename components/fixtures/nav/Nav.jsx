import React, { useState } from 'react';
import Navbar from 'react-bulma-components/src/components/navbar';
import Container from 'react-bulma-components/src/components/container';
import './Nav.module.scss';

const Nav = () => {
  const [isMobileMenuActive, setisMobileMenuActive] = useState(false);

  return (
    <Navbar
      color='primary'
      fixed='top'
      className='nav-font'
    >
      <Container>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="/">
            <img className="logo" src="/log-cut-down.png" alt="AquaHobby: Your source for all things aquarium" height="60" />
          </Navbar.Item>
          <Navbar.Burger
            className={isMobileMenuActive ? 'is-active' : ''}
            onClick={() => setisMobileMenuActive(!isMobileMenuActive)}
          />
        </Navbar.Brand>
        <Navbar.Menu className={isMobileMenuActive ? 'is-active' : ''}>
          <Navbar.Container position="start">
            <Navbar.Item
              dropdown
              hoverable

            >
              <Navbar.Link
                arrowless={true}
                className="menu-font"
                renderAs="a"
                href="/freshwater-aquariums/directory"
              >
                Freshwater
              </Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item href="/freshwater-aquariums/freshwater-equipment">
                  Equipment
                </Navbar.Item>
                <Navbar.Item href="/freshwater-aquariums/freshwater-fish">
                  Fish
                </Navbar.Item>
                <Navbar.Item href="/freshwater-aquariums/aquarium-plants">
                  Plants
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
            <Navbar.Item
              dropdown
              hoverable
            >
              <Navbar.Link
                arrowless={true}
                className="menu-font"
                renderAs="a"
                href="/saltwater-aquariums/directory"
              >
                Saltwater
              </Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item href="/saltwater-aquariums/saltwater-equipment">
                  Equipment
                </Navbar.Item>
                <Navbar.Item href="/saltwater-aquariums/saltwater-fish">
                  Fish
                </Navbar.Item>
                <Navbar.Item href="/saltwater-aquariums/coral">
                  Coral
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Container>
          {/* <Navbar.Container position="end">
            
            </Navbar.Container> */}
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
};

export default Nav;
