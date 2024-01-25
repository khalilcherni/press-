import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TV from './Tv.jsx';
import Radio from './Radio.jsx';
import Aboutus from './Aboutus.jsx';
import WeatherInfo from './WeatherInfo';
import ContactForm from './Email.jsx';
import Add from './Add.jsx';
import Sports from './Sports';
import Music from './Music';
import Home from './Home.jsx';
import Politics from './Politcs.jsx';

import logo from './images/palestine-flag.gif';




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
          <img
          src={logo}
          height="60"
        />
    
          Tunisian Press</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => handleTabClick('home')}>
                Home
              </Nav.Link>
              <Nav.Link href="#weather" onClick={() => handleTabClick('Weather')}>
                Weather
              </Nav.Link>
              <Nav.Link href="#sports" onClick={() => handleTabClick('sports')}>
                Sports
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => handleTabClick('politics')}>
                Politics
              </Nav.Link>
              {/* <Nav.Link href="#link" onClick={() => handleTabClick('tech')}>
                Tech
              </Nav.Link> */}
              <Nav.Link href="#music" onClick={() => handleTabClick('music')}>
                Music
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => handleTabClick('Add')}>
                Add News
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => handleTabClick('contact')}>
                Contact Us
              </Nav.Link>
              <NavDropdown title="details" id="basic-nav-dropdown" >
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
                <NavDropdown.Item href="#About" onClick={() => handleTabClick('About')}>
                  About Us
                </NavDropdown.Item>
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
      {activeTab === 'Aboutus' && <Aboutus />}

      {activeTab === 'Weather' && <WeatherInfo />}
      {activeTab === 'music' && <Music />}
      {activeTab === 'contact' && <ContactForm />}
      {activeTab === 'Add' && <Add />}
      {activeTab === 'politics' && <Politics />}
    </div>
  );
}

export default BasicExample;
