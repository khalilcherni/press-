import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import TV from './Tv';
import Radio from './Radio';
import About from './About'; // Assuming the component is named 'About'
import WeatherInfo from './WeatherInfo';
import ContactForm from './Email';
import Add from './Add';
import Sports from './Sports';
import Music from './Music';
import Home from './Home';
import Politics from './Politcs';

import logo from './images/palestine-flag.gif';

// Navigation item component
const NavItem = ({ label, tab, onClick }) => (
  <Nav.Link href={`#${tab}`} onClick={() => onClick(tab)}>
    {label}
  </Nav.Link>
);

function BasicExample() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} height="60" alt="Logo" />
            Tunisian Press
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {[
                { label: 'Home', tab: 'home' },
                { label: 'Sports', tab: 'sports' },
                { label: 'Politics', tab: 'politics' },
                // Uncomment the following line if 'tech' is needed
                // { label: 'Tech', tab: 'tech' },
                { label: 'Music', tab: 'music' },
                { label: 'Weather', tab: 'Weather' },
                { label: 'TV', tab: 'tv' },
                { label: 'Radio', tab: 'radio' },
              ].map((item) => (
                <NavItem key={item.tab} {...item} onClick={handleTabClick} />
              ))}
              <NavDropdown title="Details" id="basic-nav-dropdown">
                {[
                { label: 'Add News', tab: 'Add' },
                { label: 'Contact Us', tab: 'contact' },
                  { label: 'About Us', tab: 'about' },
                ].map((item) => (
                  <NavItem key={item.tab} {...item} onClick={handleTabClick} />
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />

      {activeTab === 'home' && <Home />}
      {activeTab === 'sports' && <Sports />}
      {activeTab === 'tv' && <TV />}
      {activeTab === 'radio' && <Radio />}
      {activeTab === 'about' && <About />}

      {activeTab === 'Weather' && <WeatherInfo />}
      {activeTab === 'music' && <Music />}
      {activeTab === 'contact' && <ContactForm />}
      {activeTab === 'Add' && <Add />}
      {activeTab === 'politics' && <Politics />}
    </div>
  );
}

export default BasicExample;
