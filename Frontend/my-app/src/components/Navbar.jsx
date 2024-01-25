import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TV from './Tv.jsx';
import Radio from './Radio.jsx';
import About from './About';
import WeatherInfo from './WeatherInfo';


import Sports from './Sports'; // Import the Sports component
import Music from './Music';
import Home from './Home';

// ... (previous imports)

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
              <Nav.Link href="#weather" onClick={() => handleTabClick('Weather')}>
                Weather
              </Nav.Link>
              <Nav.Link href="#radio" onClick={() => handleTabClick('radio')}>
                Radio
              </Nav.Link>
              <Nav.Link href="#tv" onClick={() => handleTabClick('tv')}>
                TV
              </Nav.Link>
              <Nav.Link href="#about" onClick={() => handleTabClick('about')}>
                About Us
              </Nav.Link>
              <Nav.Link href="#music" onClick={() => handleTabClick('music')}>
                Music
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#dropdown-item-1">Dropdown Item 1</NavDropdown.Item>
                <NavDropdown.Item href="#dropdown-item-2">Dropdown Item 2</NavDropdown.Item>
                {/* Add more dropdown items if needed */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Render components based on the activeTab state */}
      {activeTab === 'home' && <Home />}
      {activeTab === 'sports' && <Sports />}
      {activeTab === 'tv' && <TV />}
      {activeTab === 'radio' && <Radio />}
      {activeTab === 'about' && <About />}
      {activeTab === 'Weather' && <WeatherInfo />}
      {activeTab === 'music' && <Music />}
      {/* Add other conditions for other tabs if needed */}
    </div>
  );
}

export default BasicExample;
