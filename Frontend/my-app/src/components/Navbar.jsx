import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Sports from './Sports'; // Import the Sports component
import Music from './Music';
import Home from './Home';
import ContactForm from './Email';
import Add from './Add';
import Po from './Politcs';

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
              <Nav.Link  onClick={() => handleTabClick('sports')}>Sports</Nav.Link >
              <Nav.Link href="#link" onClick={() => handleTabClick('politics')}>
                Politics
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => handleTabClick('tech')}>
                Tech
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => handleTabClick('music')}>
                Music
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => handleTabClick('Add')}>
            Add News
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => handleTabClick('contact')}>
                Contact Us
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                {/* Dropdown items here */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />

   {activeTab==='home' && <Home/>}
      {activeTab === 'sports' && <Sports />}
      {activeTab === 'music' && <Music />}
      {activeTab === 'contact' && <ContactForm />}
      {activeTab==='Add' && <Add/>}
      {activeTab==='politics' && <Po/>}
    </div>
  );
}

export default BasicExample;
