import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Sports from './Sports';
import Home from './Home';
import TV from './Tv';
import Radio from './Radio';
import About from './About';
import WeatherInfo from './WeatherInfo';



function BasicExample() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Tunisian Press</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => handleTabClick('home')}>
                Home
              </Nav.Link>
              <Nav.Link href="#sports" onClick={() => handleTabClick('sports')}>
                Sports
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => handleTabClick('politics')}>
                Politics
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => handleTabClick('tech')}>
                Tech
              </Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#weather" onClick={() => handleTabClick('Weather')}>
                  Weather
                </NavDropdown.Item>
                <NavDropdown.Item href="#radio" onClick={() => handleTabClick('radio')}>
                  Radio
                </NavDropdown.Item>
                <NavDropdown.Item href="#tv" onClick={() => handleTabClick('tv')}>
                  TV
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#about" onClick={() => handleTabClick('about')}>
                  About Us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {activeTab === 'home' && <Home />}
      {activeTab === 'sports' && <Sports />}
      {activeTab === 'tv' && <TV />}
      {activeTab === 'radio' && <Radio />}
      {activeTab === 'about' && <About />}
      {activeTab === 'Weather' && <WeatherInfo/>}

    </div>
  );
}

export default BasicExample;
